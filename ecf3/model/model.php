<?php
/**
 * @author      Yann Kintz <yann.kintz@hotmail.fr>
 * @version     v.1.0 (01/03/2021)
 * @copyright   Copyright (c) 2021, Yann
 */

 /**
 * Classe des entité metier
 */
class Model{

    /**
     * Objet pdo
     *
     * @var object
     */
    protected $pdo;

    /**
     * Construit un objet pdo
     *
     * @param object $pdo pdo d'acces a la base de donné.
     *
     * @return object Objet pdo instancié
     */
    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    /**
     * Retourne la liste de tout les biens immobilier
     *
     * @return string liste des biens immobilier
     */
    public function getAllBien() {
        $pdo = $this->pdo->openDatabase();
        $sql = "SELECT `code_gestion` FROM `bien_immobilier` ORDER BY `id_bien_immobilier`";
        $query = $pdo->prepare($sql);
        $query->execute();
        $json = $query->fetchAll(PDO::FETCH_ASSOC);
        echo "<pre>".json_encode(array("action" => "list", "entity" => "bien", "data" => $json), JSON_PRETTY_PRINT)."</pre>";
    }

    /**
     * Retourne un bien immobilier
     *
     * @return string bien immobilier
     */
    public function getBienByCode($code) {
        $pdo = $this->pdo->openDatabase();
        $sql = "SELECT * FROM `bien_immobilier` WHERE `code_gestion` = :code";
        $query = $pdo->prepare($sql);
        $query->bindValue(':code', $code, PDO::PARAM_STR);
        $query->execute();
        $json = $query->fetch(PDO::FETCH_ASSOC);
        echo "<pre>".json_encode(array("action" => "read", "entity" => "bien", "data" => $json), JSON_PRETTY_PRINT)."</pre>";
    }

    /**
     * Retourne la liste de tout les clients immobilier
     *
     * @return string liste des clients immobilier
     */
    public function getAllClients() {
        $pdo = $this->pdo->openDatabase();
        $sql = "SELECT `code_client` FROM `client` ORDER BY `id_client`";
        $query = $pdo->prepare($sql);
        $query->execute();
        $json = $query->fetchAll(PDO::FETCH_ASSOC);
        echo "<pre>".json_encode(array("action" => "list", "entity" => "client", "data" => $json), JSON_PRETTY_PRINT)."</pre>";
    }

    /**
     * Retourne un client
     *
     * @return string client
     */
    public function getClientByCode($code) {
        $pdo = $this->pdo->openDatabase();
        $sql = "SELECT * FROM `client` WHERE `code_client` = :code";
        $query = $pdo->prepare($sql);
        $query->bindValue(':code', $code, PDO::PARAM_STR);
        $query->execute();
        $json = $query->fetch(PDO::FETCH_ASSOC);
        echo "<pre>".json_encode(array("action" => "read", "entity" => "client", "data" => $json), JSON_PRETTY_PRINT)."</pre>";
    }
}