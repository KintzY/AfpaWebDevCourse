-- ******************************************** --
-- * GROUPE APIY                                --
-- * DATE 11/02/21                              -- 
-- * MISSION 6                                  --
-- ******************************************** --
-- * ENVIRONNEMENT                              --
-- * phpMyAdmin ver 5.0.2                       --
-- * MySQL ver 5.7.31                           --
-- * OS: Win10, Nav : Chrome                    --
-- ******************************************** --
-- * CREATION DE LA BASE DE DONNEES VIDEOSTAR   --
-- * Création des tables                        --
-- ******************************************** --

-- * INITIALISATION DE LA BDD                   --

DROP DATABASE IF EXISTS videostar;
CREATE DATABASE videostar;
USE videostar;

-- *********** CREATION DES TABLES ***********  --

CREATE TABLE SUPPORTS_PHYSIQUES(
   id_support_physique INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   libelle VARCHAR(32) NOT NULL UNIQUE,
   prix_location_journalier DECIMAL(5,2)
);

CREATE TABLE ADHERENTS(
   id_adherent INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   numero_adherent CHAR(10) NOT NULL UNIQUE,
   civilite CHAR(4) NOT NULL,
   nom VARCHAR(56) NOT NULL,
   prenom VARCHAR(56) NOT NULL,
   adresse VARCHAR(56) NOT NULL,
   code_postal CHAR(6) NOT NULL,
   ville VARCHAR(56),
   tel CHAR(10),
   email VARCHAR(64),
   credits_restant DECIMAL(5,2)
);

CREATE TABLE TYPES_DOCUMENTAIRES(
   id_type_documentaire INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   libelle VARCHAR(56) NOT NULL UNIQUE
);

CREATE TABLE STARS(
   id_star INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nom VARCHAR(56) NOT NULL,
   prenom VARCHAR(56) NOT NULL
);

CREATE TABLE LIEUX(
   id_lieux INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   nom VARCHAR(56) NOT NULL UNIQUE
);

CREATE TABLE DOCUMENTAIRES(
   id_documentaire INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   code_documentaire CHAR(6) NOT NULL UNIQUE,
   libelle VARCHAR(64) NOT NULL,
   annee SMALLINT,
   telechargeable BOOLEAN,
   prix_telechargement SMALLINT,
   id_type_documentaire INT,

   FOREIGN KEY(id_type_documentaire) REFERENCES TYPES_DOCUMENTAIRES(id_type_documentaire)
);

CREATE TABLE EXEMPLAIRES(
   id_exemplaire INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   numero_exemplaire CHAR(8) NOT NULL UNIQUE,
   etat CHAR(1) NOT NULL,
   id_documentaire INT NOT NULL,
   id_support_physique INT NOT NULL,

   FOREIGN KEY(id_documentaire) REFERENCES DOCUMENTAIRES(id_documentaire),
   FOREIGN KEY(id_support_physique) REFERENCES SUPPORTS_PHYSIQUES(id_support_physique)
);

CREATE TABLE LOCATIONS(
   id_location INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   date_depart DATE UNIQUE,
   date_rendu DATE UNIQUE,
   id_exemplaire INT NOT NULL,
   id_adherent INT NOT NULL,

   FOREIGN KEY(id_exemplaire) REFERENCES EXEMPLAIRES(id_exemplaire),
   FOREIGN KEY(id_adherent) REFERENCES ADHERENTS(id_adherent)
);

CREATE TABLE TELECHARGEMENTS(
   id_telechargement INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   date_telechargement DATE UNIQUE,
   id_documentaire INT NOT NULL,
   id_adherent INT NOT NULL,

   FOREIGN KEY(id_documentaire) REFERENCES DOCUMENTAIRES(id_documentaire),
   FOREIGN KEY(id_adherent) REFERENCES ADHERENTS(id_adherent)
);

CREATE TABLE PARTICIPER(
   id_documentaire INT,
   id_star INT,
   role VARCHAR(56) UNIQUE,
    
    PRIMARY KEY (id_documentaire, id_star),
    FOREIGN KEY(id_documentaire) REFERENCES DOCUMENTAIRES(id_documentaire),
    FOREIGN KEY(id_star) REFERENCES STARS(id_star)
);

CREATE TABLE LOCALISER(
   id_documentaire INT,
   id_lieux INT,

    PRIMARY KEY (id_documentaire,id_lieux),
    FOREIGN KEY(id_documentaire) REFERENCES DOCUMENTAIRES(id_documentaire),
    FOREIGN KEY(id_lieux) REFERENCES LIEUX(id_lieux)
);
