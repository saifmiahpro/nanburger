<?php
/**
 * NAN BURGER - API Commandes
 * Endpoints:
 *   GET    /api/orders.php              - Liste toutes les commandes
 *   GET    /api/orders.php?id=1         - Une commande spécifique
 *   GET    /api/orders.php?status=pending - Commandes par statut
 *   GET    /api/orders.php?date=2024-01-15 - Commandes par date
 *   POST   /api/orders.php              - Créer une commande
 *   PUT    /api/orders.php?id=1         - Mettre à jour une commande
 *   DELETE /api/orders.php?id=1         - Supprimer une commande
 */

require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = getDB();

switch ($method) {
    case 'GET':
        handleGet($pdo);
        break;
    case 'POST':
        handlePost($pdo);
        break;
    case 'PUT':
        handlePut($pdo);
        break;
    case 'DELETE':
        handleDelete($pdo);
        break;
    default:
        jsonResponse(['error' => 'Method not allowed'], 405);
}

// ========== GET ==========
function handleGet($pdo) {
    // Commande spécifique par ID
    if (isset($_GET['id'])) {
        $id = intval($_GET['id']);
        $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
        $stmt->execute([$id]);
        $order = $stmt->fetch();

        if ($order) {
            $order['items'] = json_decode($order['items'], true);
            $order['total'] = floatval($order['total']);
            jsonResponse($order);
        } else {
            jsonResponse(['error' => 'Order not found'], 404);
        }
    }

    // Commandes par statut
    if (isset($_GET['status'])) {
        $status = sanitize($_GET['status']);
        $stmt = $pdo->prepare("SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC");
        $stmt->execute([$status]);
        $orders = $stmt->fetchAll();

        foreach ($orders as &$order) {
            $order['items'] = json_decode($order['items'], true);
            $order['total'] = floatval($order['total']);
        }

        jsonResponse($orders);
    }

    // Commandes par date (pour rapport)
    if (isset($_GET['date'])) {
        $date = sanitize($_GET['date']);
        $stmt = $pdo->prepare("
            SELECT * FROM orders
            WHERE DATE(created_at) = ?
            ORDER BY created_at DESC
        ");
        $stmt->execute([$date]);
        $orders = $stmt->fetchAll();

        foreach ($orders as &$order) {
            $order['items'] = json_decode($order['items'], true);
            $order['total'] = floatval($order['total']);
        }

        jsonResponse($orders);
    }

    // Toutes les commandes (limité aux 100 dernières)
    $stmt = $pdo->query("SELECT * FROM orders ORDER BY created_at DESC LIMIT 100");
    $orders = $stmt->fetchAll();

    foreach ($orders as &$order) {
        $order['items'] = json_decode($order['items'], true);
        $order['total'] = floatval($order['total']);
    }

    jsonResponse($orders);
}

// ========== POST (Créer) ==========
function handlePost($pdo) {
    $data = getJsonInput();

    // Validation
    if (empty($data['items']) || !is_array($data['items'])) {
        jsonResponse(['error' => 'Items requis'], 400);
    }

    // Générer numéro de commande unique
    $orderNumber = generateOrderNumber($pdo);

    // Préparer les données
    $customerName = isset($data['customer_name']) ? sanitize($data['customer_name']) : 'Client';
    $customerPhone = isset($data['customer_phone']) ? sanitize($data['customer_phone']) : null;
    $items = json_encode($data['items'], JSON_UNESCAPED_UNICODE);
    $total = floatval($data['total'] ?? 0);
    $status = isset($data['status']) ? sanitize($data['status']) : 'pending';
    $orderType = isset($data['order_type']) ? sanitize($data['order_type']) : 'web';
    $paymentMethod = isset($data['payment_method']) ? sanitize($data['payment_method']) : null;

    // Insertion
    $stmt = $pdo->prepare("
        INSERT INTO orders (order_number, customer_name, customer_phone, items, total, status, order_type, payment_method)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute([
        $orderNumber,
        $customerName,
        $customerPhone,
        $items,
        $total,
        $status,
        $orderType,
        $paymentMethod
    ]);

    $orderId = $pdo->lastInsertId();

    // Créer événement SSE pour notifier la caisse
    if ($orderType === 'web') {
        createSSEEvent($pdo, 'new_order', [
            'id' => $orderId,
            'order_number' => $orderNumber,
            'customer_name' => $customerName,
            'total' => $total
        ]);
    }

    // Récupérer la commande créée
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
    $stmt->execute([$orderId]);
    $order = $stmt->fetch();
    $order['items'] = json_decode($order['items'], true);
    $order['total'] = floatval($order['total']);

    jsonResponse([
        'success' => true,
        'order' => $order,
        'order_number' => $orderNumber
    ], 201);
}

// ========== PUT (Mettre à jour) ==========
function handlePut($pdo) {
    if (!isset($_GET['id'])) {
        jsonResponse(['error' => 'ID requis'], 400);
    }

    $id = intval($_GET['id']);
    $data = getJsonInput();

    // Vérifier que la commande existe
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
    $stmt->execute([$id]);
    if (!$stmt->fetch()) {
        jsonResponse(['error' => 'Order not found'], 404);
    }

    // Construire la requête de mise à jour dynamiquement
    $updates = [];
    $params = [];

    if (isset($data['status'])) {
        $updates[] = "status = ?";
        $params[] = sanitize($data['status']);
    }
    if (isset($data['payment_method'])) {
        $updates[] = "payment_method = ?";
        $params[] = sanitize($data['payment_method']);
    }
    if (isset($data['customer_name'])) {
        $updates[] = "customer_name = ?";
        $params[] = sanitize($data['customer_name']);
    }
    if (isset($data['customer_phone'])) {
        $updates[] = "customer_phone = ?";
        $params[] = sanitize($data['customer_phone']);
    }
    if (isset($data['items'])) {
        $updates[] = "items = ?";
        $params[] = json_encode($data['items'], JSON_UNESCAPED_UNICODE);
    }
    if (isset($data['total'])) {
        $updates[] = "total = ?";
        $params[] = floatval($data['total']);
    }

    if (empty($updates)) {
        jsonResponse(['error' => 'No data to update'], 400);
    }

    $params[] = $id;
    $sql = "UPDATE orders SET " . implode(", ", $updates) . " WHERE id = ?";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);

    // Récupérer la commande mise à jour
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
    $stmt->execute([$id]);
    $order = $stmt->fetch();
    $order['items'] = json_decode($order['items'], true);
    $order['total'] = floatval($order['total']);

    // Notifier via SSE si le statut change
    if (isset($data['status'])) {
        createSSEEvent($pdo, 'order_updated', [
            'id' => $id,
            'status' => $data['status']
        ]);
    }

    jsonResponse([
        'success' => true,
        'order' => $order
    ]);
}

// ========== DELETE ==========
function handleDelete($pdo) {
    if (!isset($_GET['id'])) {
        jsonResponse(['error' => 'ID requis'], 400);
    }

    $id = intval($_GET['id']);

    $stmt = $pdo->prepare("DELETE FROM orders WHERE id = ?");
    $stmt->execute([$id]);

    if ($stmt->rowCount() > 0) {
        jsonResponse(['success' => true, 'message' => 'Order deleted']);
    } else {
        jsonResponse(['error' => 'Order not found'], 404);
    }
}

// ========== Helpers ==========
function generateOrderNumber($pdo) {
    $today = date('Y-m-d');

    // Compter les commandes du jour
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM orders WHERE DATE(created_at) = ?");
    $stmt->execute([$today]);
    $count = $stmt->fetchColumn() + 1;

    // Format: NB-XXX (reset quotidien)
    return 'NB-' . str_pad($count, 3, '0', STR_PAD_LEFT);
}

function createSSEEvent($pdo, $type, $data) {
    $stmt = $pdo->prepare("INSERT INTO sse_events (event_type, data) VALUES (?, ?)");
    $stmt->execute([$type, json_encode($data, JSON_UNESCAPED_UNICODE)]);
}
