    /***********************************************************
    
    Nom du programme : parcAuto
    Auteur           : Groupe AKPS (kaïk, Nada, Yann, Arnaud)
    Date             : 19.10.20
     
    Présentation du programme:
    ==========================
    Ce programme de gestion de parc-auto est un prototype de programmes orientés objet.
    Nous avons définis l'algorithme de base pour ce programme puis implimenté le code en repectant le cahier des charges.

    Utilisation du programme:
    =========================
    A partir de la console, l'utilisateur initialise l'objet saisi les attributs disponibles.
    ***********************************************************/
      // Déclartion de l'objet voiture
      var voiture = {

        // Déclaration des Attribute properties
        _immatriculation            : "Immatriculation",
        _couleur                    : "Couleur",
        _poids                      : 0,
        _puissance                  : 0,
        _capaciteDuReservoir        : 0.0,
        _niveauEssence              : 5.0,
        _nombreDePlace              : 0,
        _assurance                  : false,
        _messageTableauDeBord       : "Message au tableau de bord",

        // Initialisation de l'objet voiture pour affecter les propriétés et leurs valeurs associées.
        initialiser: function(

                      immatriculation, 
                      couleur, 
                      poids,
                      puissance,
                      capaciteDuReservoir,
                      //niveauEssence,
                      nombreDePlace,
                      assurance,
                      //messageTableauDeBord
                      ) 
        {
          this._immatriculation           = immatriculation;
          this._couleur                   = couleur;
          this._poids                     = parseInt(poids);
          this._puissance                 = parseInt(puissance);
          this._capaciteDuReservoir       = parseFloat(capaciteDuReservoir);
          //this._niveauEssence             = niveauEssence;
          this._nombreDePlace             = parseInt(nombreDePlace);
          this._assurance                 = assurance;
          //this._messageTableauDeBord      = messageTableauDeBord;

          document.getElementById("init-imat").innerHTML = "Immatriculation = " + immatriculation;
          document.getElementById("init-couleur").innerHTML = "Couleur = " + couleur;
          document.getElementById("init-poids").innerHTML = "Poids = " + poids;
          document.getElementById("init-puiss").innerHTML = "Puissance = " + puissance;
          document.getElementById("init-cap").innerHTML = "Capacité du Reservoir = " + capaciteDuReservoir;
          document.getElementById("init-place").innerHTML = "Nombre de Place = " + nombreDePlace;
          document.getElementById("init-assur").innerHTML = "Assurance = " + assurance;
          document.getElementById("init-ess").innerHTML = "Niveau d'Essence = " + this.getNiveauEssence;
        },

        // Déclaration des Getters pour lire les valeurs 
        get getImmatriculation()               { return this._immatriculation; },
        get getCouleur()                       { return this._couleur; },
        get getPoids()                         { return this._poids; },
        get getPuissance()                     { return this._puissance; },
        get getCapaciteDuReservoir()           { return this._capaciteDuReservoir; },
        get getNiveauEssence()                 { return this._niveauEssence; },
        get getNombreDePlace()                 { return this._nombreDePlace; },
        get getAssurance()                     { return this._assurance; },
        get getMessageTableauDeBord()          { return this._messageTableauDeBord; },

        // Déclaration des Setters pour modifier des valeurs
        set setImmatriculation(string)         { this._immatriculation = string; },
        set setCouleur(string)                 { this._couleur = string; },
        set setPoids(int)                      { this._poids = int; },
        set setPuissance(int)                  { this._puissance = int; },
        set setCapaciteDuReservoir(float)      { this._capaciteDuReservoir = float; },
        set setNiveauEssence(float)            { this._niveauEssence = float; },
        set setNombreDePlace(int)              { this._nombreDePlace = int; },
        set setAssurance(bool)                 { this._assurance = bool; },
        set setMessageTableauDeBord(string)    { this._messageTableauDeBord = string; },

        // Déclarationdes méthodes de l'objet 

        // Déclaration de la méthode repeindre() pour savoir a été repeinte
        repeindre: function (nouvelleCouleur) {

          if (nouvelleCouleur === this.getCouleur) {   
            this.setMessageTableauDeBord = "merci rafraichissement";
          } else {
            this.setCouleur = nouvelleCouleur;
            this.setMessageTableauDeBord = "merci nouvelle couleur";
          }
          console.log(this.getMessageTableauDeBord);
          document.getElementById("init-couleur").innerHTML = "Couleur = " + this.getCouleur;
          document.getElementById("couleur-changer").innerHTML = "nouvelle couleur : " + this.getCouleur;
          document.getElementById("message-tableau").innerHTML = "Message du tableeau de bord : " + this.getMessageTableauDeBord;
          return nouvelleCouleur;
        },
        
        // Déclaration de la méthode mettreEssence() s'il faut mettre de l'essence
        mettreEssence: function (quantite) {

          if (quantite <= this.getCapaciteDuReservoir - this.getNiveauEssence) {
            this.setNiveauEssence = parseFloat(quantite) + this.getNiveauEssence;
            this.setMessageTableauDeBord = "feedback";
          } else {
            this.setMessageTableauDeBord = "erreur";
          }
          console.log(this.getMessageTableauDeBord);
          document.getElementById("init-ess").innerHTML = "Niveau d'Essence = " + this.getNiveauEssence;
          document.getElementById("nouvelle-quantite").innerHTML = "Nouvelle quantité : " + this.getNiveauEssence;
          document.getElementById("message-tableau").innerHTML = "Message du tableeau de bord : " + this.getMessageTableauDeBord;
          return this.getNiveauEssence;
        },

        // Déclaration de la méthode seDeplacer pour s'assurer qu'il y a suffisament de carburant pour parcourrir la distance souhaitée selon une vitesse.
        seDeplacer: function(distanceKm, vitesseKmh) {

          var consommation =
              vitesseKmh <= 50 ? consommation = distanceKm * (10/100)
            : vitesseKmh >= 50 && vitesseKmh <= 90 ? consommation = distanceKm * (5/100)
            : vitesseKmh >= 90 && vitesseKmh <= 130 ? consommation = distanceKm * (8/100)
            : vitesseKmh >= 130 ? consommation = distanceKm * (12/100)
            : "null";
          console.log(consommation);
          if (consommation <= this.getNiveauEssence) {
            this.setMessageTableauDeBord = "voyage possible";
            document.getElementById("consommation").innerHTML = "Consommation de carburant = " + consommation;
          } else {
            this.setMessageTableauDeBord = "impossible"
          }
          console.log(this.getMessageTableauDeBord);
          document.getElementById("message-tableau").innerHTML = "Message du tableeau de bord : " + this.getMessageTableauDeBord;
          return consommation;
        },

        resume: function() {
          
          console.log("Immatriculation : " + this.getImmatriculation + 
            ", Couleur : " + this.getCouleur + 
            ", Poids : " + this.getPoids + 
            ", Puissance : " + this.getPuissance + 
            ", Capacité du réservoir : " + this.getCapaciteDuReservoir +
            ", Niveau d'essence : " + this.getNiveauEssence +
            ", Nombre de place : " + this.getNombreDePlace +
            ", Assurré : " + this.getAssurance +
            ", Message du tableau de bord : " + this.getMessageTableauDeBord
          );
        }
      };
