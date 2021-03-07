
"use strict";
(function () {
    console.log("Exécution de l'IIFE principale");
    {
        console.log("Exécution du bloc d'enregistrement des événements");
        {
            console.log("=> tri des clients");

            /**
             * sortColumn()
             * * Tri des données de la table selon la colonne courante
             * TODO Ecrire la requête AJAX correspondante de récupération des données du tableau
             * TODO Ecrire la logique de rechargement du tableau
             * @param e objet JS Event correspondant à l'événement courant
             * ! L'élément ciblé doit posséder en identifiant le numéro du client
             * @return void
             */
            function sortColumn(e) {
                console.log("Rechargement dynamique des données du tableau trié par la colonne '" + (e.target).id + "' avec requête AJAX");
            }
            // ? https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
            let elSortActions = document.querySelectorAll(".action-column-sort");      
            elSortActions.forEach(function (currentEl) {
                registerOnClickCb(currentEl, sortColumn);
            });
        }
        {
            console.log("=> consultation des clients");

            /**
             * goToCustomerPage()
             * * Redirige vers la page de la fiche du client
             * TODO Ecrire les pages webs correspondantes
             * @param e objet JS Event correspondant à l'événement courant
             * ! L'élément ciblé doit posséder en identifiant le numéro du client et l'URL cible stockée dans l'attribut HTML "data-url"
             * @return void
             */
            function goToCustomerPage(e) {
                let el = e.target;
                let id = el.id;
                let url = el.dataset.url;
                url = url + "?id=" + id;
                console.log("Redirection HTTP vers la page web du client " + url);
            }
            let elRedirectCustomers = document.querySelectorAll(".action-more-info");
            elRedirectCustomers.forEach(function (currentEl) {
                registerOnClickCb(currentEl, goToCustomerPage);
            });
        }
        {
            console.log("=> recherche d'un client");

            /**
             * loadClient()
             * * Récupère les données d'un client
             * TODO Ecrire la requête AJAX correspondante de récupération des données du client
             * TODO Ecrire la logique d'affichage dynamique de la fiche du client
             * @param e objet JS Event correspondant à l'événement courant
             * ! L'élément ciblé doit posséder en identifiant le numéro du client
             * @return void
             */
            function loadClient(e) {
                console.log("Récupération des données du client '" + e.target.id + "' avec une requête AJAX");
            }
            let elRedirectCustomers = document.querySelectorAll(".action-search-customer");
            elRedirectCustomers.forEach(function (currentEl) {
                registerOnClickCb(currentEl, loadClient);
            });
        }
        {
            console.log("=> hyperliens");

            /**
             * beforeRedirect()
             * * Intercepte les demandes de redirection de liens
             * TODO Ecrire les pages webs correspondantes
             * @param e objet JS Event correspondant à l'événement courant
             * ! L'élément ciblé doit être de type "ancre" HTML avec un attribut "href"
             * @return void
             */
            function beforeRedirect(e) {
                e.preventDefault();
                console.log("Rédirection HTTP vers la page '" + e.target.href);
            }
            let elAnchors = document.getElementsByTagName("a");
            // ! elAnhors est un objet de type HTMLCollection et non pas de type NodeList
            for (let currentEl of elAnchors) {
                registerOnClickCb(currentEl, beforeRedirect);
            };
        }

        // Surcharge de l'envoi du formulaire
        {
            console.log("=> soumission du formulaire");

            /**
             * beforeSubmit()
             * * Intercepte les demandes de soumissions de formulaires pour les valider avant leur envoi par requête HTTP
             * ? https://developer.mozilla.org/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_donn%C3%A9es_des_formulaires
             * TODO Ecrire les pages webs correspondantes
             * @param e objet JS Event correspondant à l'événement courant
             * ! L'élément ciblé doit être de type "intput[type='submit']" HTML
             * @return void
             */
            function beforeSubmit(e) {
                e.preventDefault();
                let form = e.target.closest("form");
                let flagFormOk = false;
                {
                    console.log("Validation du formulaire avant envoi");

                    // Récupération des champs du formulaire (ici seulement des éléments HTML "input" enfants de l'élément form) depuis le DOM
                    // ? https://developer.mozilla.org/fr/docs/Web/API/Element/getElementsByTagName
                    // ! elAnhors est un objet de type HTMLCollection et non pas de type NodeList
                    let inputs = form.getElementsByTagName("input");
                    for (let currentInput of inputs) {
                        if (currentInput.type != "submit") {
                            console.log("   => champ #" + currentInput.id);
                            let validObj = currentInput.validity;

                            // Vérification de la conformité de la valeur du champ
                            // ! On vérifie si le champ n'est pas valide grâce au contraire '!' du booléen
                            if (!validObj.valid) {
                                console.log("       Valeur '" + currentInput.value + "' invalide!");

                                // Sortie de la boucle car il n'est pas nécessaire de vérifier les champs suivants
                                break;
                            } else {
                                if (currentInput.value !== "") {
                                    flagFormOk = true;

                                    console.log("       Valeur de recherche : " + currentInput.value);

                                    // Sortie de la boucle car il n'est pas nécessaire d'utiliser les champs suivants car la recherche est mono-critère
                                    break;
                                } else {
                                    console.log("       Valeur vide!");
                                }

                            }
                        }
                    }
                }

                // Contrôle si le remplissage du formulaire est bon
                if (flagFormOk) {
                    console.log("   Rédirection HTTP vers la page '" + form.action);
                    // TODO Faire le redirection HTTP
                } else {
                    console.log("   Formulaire invalide, soumission rejetée!")
                }

            }
            let elSubmit = document.getElementById("rechercher_client");
            registerOnClickCb(elSubmit, beforeSubmit);
        }

        /**
         * registerOnClickCb()
         * * Enregistrement d'une fonction de rappel (callback) sur l'événement "onclick" d'un élément HTML
         * TODO Ecrire la requête AJAX correspondante
         * @param el objet JS Element correspondant à l'élément devant gérer le clic souris
         * @param cb fonction "callback" à executer lors du clic souris 
         * @return void
         */
        function registerOnClickCb(el, cb) {
            let context = (el.id !== "") ? ("#" + el.id) : el.href;    
            console.log("   " + context + ".onclick = " + cb.name);
            el.onclick = cb;
        }
    }
})();