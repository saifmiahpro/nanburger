<?php
/**
 * NAN BURGER - Health Check Endpoint
 * Vérifie que l'API et la base de données fonctionnent
 */

require_once 'config.php';

try {
    $pdo = getDB();

    // Test de connexion
    $stmt = $pdo->query("SELECT 1");

    // Compter les commandes du jour
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM orders WHERE DATE(created_at) = CURDATE()");
    $stmt->execute();
    $todayOrders = $stmt->fetchColumn();

    jsonResponse([
        'status' => 'ok',
        'database' => 'connected',
        'orders_today' => intval($todayOrders),
        'timestamp' => date('c'),
        'php_version' => PHP_VERSION
    ]);

} catch (Exception $e) {
    jsonResponse([
        'status' => 'error',
        'database' => 'disconnected',
        'error' => DEBUG_MODE ? $e->getMessage() : 'Connection failed'
    ], 500);
}
