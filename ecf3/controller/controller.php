<?php
/**
 * @author      Yann Kintz <yann.kintz@hotmail.fr>
 * @version     v.1.0 (01/03/2021)
 * @copyright   Copyright (c) 2021, Yann
 */

    /**
    * Classe des entité metier
    */
    class Controller{

        /**
        * Objet entité metier
        *
        * @var object
        */
        protected $model;

        /**
        * Construit un objet de type voiture
        *
        * @param object $model entité metier.
        *
        * @return object Objet enitité instancié
        */
        public function __construct($model){
            $this->model = $model;
        }

        /**
        * Appel de fonction de list de biens
        */
        public function bienList() {
            $this->model->getAllBien();
        }

        /**
        * Appel de fonction de lecture de bien unique
        */
        public function bienRead() {
            if (($_GET['action']='read') && isset($_GET['code']))  {
                $code = isset($_GET['code']) ? $_GET['code'] : "";
                /**
                 * @param object $code parametre récuperer dans l'url
                 */
                $this->model->getBienByCode($code);
            }
        }

        /**
        * Appel de fonction de list de clients
        */
        public function clientList() {
            $this->model->getAllClients();
        }

        /**
        * Appel de fonction de lecture de client unique
        */
        public function clientRead() {
            /**
             * @param object $code parametre récuperer dans l'url
             */
            if (($_GET['action']='read') && isset($_GET['code']))  {
                $code = isset($_GET['code']) ? $_GET['code'] : "";
                $this->model->getClientByCode($code);
            }
        }

    }