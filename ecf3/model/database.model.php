<?php
/**
 * @author      Yann Kintz <yann.kintz@hotmail.fr>
 * @version     v.1.0 (01/03/2021)
 * @copyright   Copyright (c) 2021, Yann
 */

 /**
 * Classe du pdo 
 */
class Database{

    /**
    * Nom de l'hôte serveur 
    *
    * @var string
    */
    private $host = "localhost";

    /**
    * Nom de la base de donné 
    *
    * @var string
    */
    private $dbname = "ecf3";

    /**
    * Nom de l'utilisateur 
    *
    * @var string
    */
    private $user = "app_loc";

    /**
    * mot de passe d'acces au serveur
    *
    * @var string
    */
    private $password = "0/ZgT19gbZ/urzoV";

    /**
     * Construit un objet de type pdo
     * 
     * @return object Objet pdo instancié
     */
    public function openDatabase() {
        $pdo = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->user, $this->password,);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
}

