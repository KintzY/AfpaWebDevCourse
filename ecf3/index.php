<?php
/**
 * @author      Yann Kintz <yann.kintz@hotmail.fr>
 * @version     v.1.0 (01/03/2021)
 * @copyright   Copyright (c) 2021, Yann
 */
require_once ('./model/database.model.php');
require_once ('./controller/controller.php');
require_once ('./model/model.php');

/**
 * Appel de fonction, initialise l'acces a la bdd. 
 */
$pdo = new Database();

/**
 * Appel de fonction, initialise l'entité metier. 
 */
$model = new Model($pdo);

/**
 * Appel de fonction, initialise le controller. 
 */
$controller = new Controller($model);

/**
 * Récupere les parametres dans l'url. 
 */
$url = parse_url($_SERVER['REQUEST_URI'], 5);

/**
 * Appel de fonction suivant les paramettres de l'url 
 * renvoie une exception en cas d'echec. 
 */
try {
    if (isset($_GET['entity'])) {
        
        switch($_GET['entity']){

            case 'bien': {
                if (isset($_GET['action'])) {
                    switch($_GET['action']){
                        case 'read': 
                            $controller->bienRead(); 
                            break;
                        case 'list': 
                            $controller->bienList(); 
                            break;
                    }
                }
            }
            break;

            case 'client': {
                if (isset($_GET['action'])) {
                    switch($_GET['action']){
                        case 'read': 
                            $controller->clientRead(); 
                            break;
                        case 'list': 
                            $controller->clientList(); 
                            break;
                    }
                }
            }
            break;
        }
    }
    
} catch (Exception $e) {
    echo $e->getMessage();
}