<?php
/**
 * NAN BURGER - Server-Sent Events (SSE) / Polling Endpoint
 *
 * Mode SSE: GET /api/events.php (streaming)
 * Mode Polling: GET /api/events.php?poll=1&since=timestamp (pour hosting limité)
 */

require_once 'config.php';

$pdo = getDB();

// Mode polling (fallback pour hébergement mutualisé)
if (isset($_GET['poll'])) {
    handlePolling($pdo);
    exit();
}

// Mode SSE (streaming)
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
header('Connection: keep-alive');
header('X-Accel-Buffering: no'); // Pour Nginx

// Désactiver le buffering PHP
if (function_exists('apache_setenv')) {
    @apache_setenv('no-gzip', '1');
}
@ini_set('zlib.output_compression', '0');
@ini_set('implicit_flush', '1');
ob_implicit_flush(true);
while (ob_get_level() > 0) {
    ob_end_flush();
}

// Envoyer un heartbeat initial
echo "event: connected\n";
echo "data: " . json_encode(['status' => 'connected', 'time' => date('c')]) . "\n\n";
flush();

$lastEventId = isset($_SERVER['HTTP_LAST_EVENT_ID']) ? intval($_SERVER['HTTP_LAST_EVENT_ID']) : 0;
$startTime = time();
$maxTime = 25; // Max 25 secondes par connexion (éviter timeout)

while ((time() - $startTime) < $maxTime) {
    // Vérifier les nouveaux événements
    $stmt = $pdo->prepare("
        SELECT * FROM sse_events
        WHERE id > ?
        ORDER BY id ASC
        LIMIT 10
    ");
    $stmt->execute([$lastEventId]);
    $events = $stmt->fetchAll();

    foreach ($events as $event) {
        echo "id: {$event['id']}\n";
        echo "event: {$event['event_type']}\n";
        echo "data: {$event['data']}\n\n";
        flush();
        $lastEventId = $event['id'];
    }

    // Heartbeat toutes les 15 secondes
    if ((time() - $startTime) % 15 === 0) {
        echo "event: heartbeat\n";
        echo "data: " . json_encode(['time' => date('c')]) . "\n\n";
        flush();
    }

    // Attendre 2 secondes avant de vérifier à nouveau
    sleep(2);

    // Vérifier si la connexion est toujours active
    if (connection_aborted()) {
        break;
    }
}

// Demander au client de se reconnecter
echo "event: reconnect\n";
echo "data: " . json_encode(['retry' => 1000]) . "\n\n";
flush();

// ========== Mode Polling ==========
function handlePolling($pdo) {
    header('Content-Type: application/json; charset=utf-8');

    $since = isset($_GET['since']) ? intval($_GET['since']) : 0;

    // Récupérer les événements depuis le dernier ID
    $stmt = $pdo->prepare("
        SELECT * FROM sse_events
        WHERE id > ?
        ORDER BY id ASC
        LIMIT 50
    ");
    $stmt->execute([$since]);
    $events = $stmt->fetchAll();

    // Formater les événements
    $formatted = array_map(function($event) {
        return [
            'id' => intval($event['id']),
            'type' => $event['event_type'],
            'data' => json_decode($event['data'], true),
            'time' => $event['created_at']
        ];
    }, $events);

    // Retourner le dernier ID pour le prochain poll
    $lastId = !empty($events) ? end($events)['id'] : $since;

    echo json_encode([
        'events' => $formatted,
        'lastId' => intval($lastId),
        'timestamp' => time()
    ], JSON_UNESCAPED_UNICODE);
}
