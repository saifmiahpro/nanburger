<?php
/**
 * NAN BURGER - Initialisation de la base de données
 * Exécutez ce fichier UNE SEULE FOIS pour créer les tables
 * URL: https://votre-domaine.com/api/init.php
 */

require_once 'config.php';

try {
    $pdo = getDB();

    // Création de la table orders
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT PRIMARY KEY,
            order_number VARCHAR(20) NOT NULL,
            customer_name VARCHAR(100) NOT NULL,
            customer_phone VARCHAR(20) DEFAULT NULL,
            items JSON NOT NULL,
            total DECIMAL(10,2) NOT NULL,
            status VARCHAR(20) DEFAULT 'pending',
            order_type VARCHAR(20) DEFAULT 'web',
            payment_method VARCHAR(50) DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            INDEX idx_status (status),
            INDEX idx_created (created_at),
            INDEX idx_order_type (order_type)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    // Création de la table pour les événements SSE (polling fallback)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS sse_events (
            id INT AUTO_INCREMENT PRIMARY KEY,
            event_type VARCHAR(50) NOT NULL,
            data JSON NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            INDEX idx_created (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    ");

    // Nettoyage automatique des anciens événements (garder 24h)
    $pdo->exec("DELETE FROM sse_events WHERE created_at < DATE_SUB(NOW(), INTERVAL 24 HOUR)");

    jsonResponse([
        'success' => true,
        'message' => 'Base de données initialisée avec succès!',
        'tables' => ['orders', 'sse_events']
    ]);

} catch (PDOException $e) {
    jsonResponse([
        'success' => false,
        'error' => DEBUG_MODE ? $e->getMessage() : 'Erreur lors de l\'initialisation'
    ], 500);
}
