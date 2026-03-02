<?php
/**
 * NAN BURGER - Configuration Base de données
 * Modifiez les valeurs ci-dessous avec vos identifiants Hostinger
 */

// Mode debug (mettre à false en production)
define('DEBUG_MODE', false);

// Configuration MySQL - À MODIFIER avec vos identifiants Hostinger
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456789_nanburger');  // Remplacez par votre nom de BDD
define('DB_USER', 'u123456789_admin');       // Remplacez par votre utilisateur
define('DB_PASS', 'VotreMotDePasse123!');    // Remplacez par votre mot de passe

// Timezone
date_default_timezone_set('Europe/Paris');

// Headers CORS et JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Connexion PDO sécurisée
function getDB() {
    static $pdo = null;

    if ($pdo === null) {
        try {
            $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            $pdo = new PDO($dsn, DB_USER, DB_PASS, $options);
        } catch (PDOException $e) {
            if (DEBUG_MODE) {
                die(json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]));
            } else {
                die(json_encode(['error' => 'Database connection failed']));
            }
        }
    }

    return $pdo;
}

// Fonction pour répondre en JSON
function jsonResponse($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit();
}

// Fonction pour récupérer le body JSON
function getJsonInput() {
    $input = file_get_contents('php://input');
    return json_decode($input, true) ?? [];
}

// Sanitize string input
function sanitize($str) {
    return htmlspecialchars(strip_tags(trim($str)), ENT_QUOTES, 'UTF-8');
}
