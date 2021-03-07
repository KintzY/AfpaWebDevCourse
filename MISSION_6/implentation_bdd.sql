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
-- * IMPLEMENTATION BDD VIDEOSTAR               --
-- * Insertion dans les tables                  --
-- ******************************************** --

use videostar;

INSERT INTO lieux (nom)
	VALUES 
        ('Paris'),
        ('New-York'),
        ('Washington'),
        ('Marseille'),
        ('Los-Angeles'),
        ('Lyon'),
        ('Chicago'),
        ('Londre'),
        ('Berlin'),
        ('Rome'),
        ('Madrid'),
        ('Moscou'),
        ('Pekin'),
        ('Seoul')
;

-- RESULTSET TABLE LIEUX --
SELECT * FROM lieux;

INSERT INTO types_documentaires (libelle) 
	VALUES 
        ('new'),
        ('science-fiction'),
        ('policier'),
        ('thriller'),
        ('comédie'),
        ('action'),
        ('aventure'),
        ('documentaire'),
        ('frisson'),
        ('animation'),
        ('biopic'),
        ('drame'),
        ('fantastique'),
        ('peplum')
;

-- RESULTSET TABLE TYPES_DOCUMENTAIRES --
SELECT * FROM types_documentaires;

INSERT INTO supports_physiques (libelle, prix_location_journalier) 
	VALUES 
        ('DVD',3),
        ('BLU-RAY',4)
;

-- RESULTSET TABLE SUPPORTS_PHYSIQUES --
SELECT * FROM supports_physiques;

INSERT INTO stars (prenom,nom)
    VALUES
		('Leonardo','DiCaprio'),
		('Morgan','Freeman'),
		('Johnny','Depp'),
		('Joaquin','Phoenix'),
		('Tom','Hardy'),
		('Samuel','L.Jackson'),
		('Gary','Oldman'),
		('Forest','Whitaker'),
		('Christian','Bale'),
		('Jake','Gyllenhaal'),
		('Brad','Pitt'),
		('Viggo','Mortensen'),
		('Matthew','Mc Conaughey'),
		('Benicio','Del Toro'),
		('Bruce','Willis'),
		('Denzel','Washington'),
		('Kevin','Costner'),
		('Edward','Norton'),
		('Mads','Mikkelsen'),
		('Ralph','Fiennes'),
		('Daniel','Radcliffe'),
		('Rupert','Grint'),
		('Christoph','Waltz'),
		('Anthony','Hopkins'),
		('Idris','Elba'),
		('Benedict','Cumberbatch'),
		('Hugh','Jackman'),
		('Willem','Dafoe'),
		('Liam','Neeson'),
		('Hugo','Weaving'),
		('Michael','Caine'),
		('Martin','Freeman'),
		('Cillian','Murphy'),
		('Mark','Wahlberg'),
		('Matt','Damon'),
		('Tom','Cruise'),
		('Sean','Connery'),
		('Laurence','Fishburne'),
		('Mark','Ruffalo'),
		('Sylvester','Stallone'),
		('Jeremy','Renner'),
		('Christian','Slater'),
		('Josh','Brolin'),
		('Kurt','Russell'),
		('Jamie','Foxx'),
		('Adrien','Brody'),
		('Bobby','Cannavale'),
		('Woody','Harrelson'),
		('Michael','Fassbender'),
		('Ian','McKellen'),
		('James','Franco'),
		('Stellan','Skarsgård'),
		('Tommy','Lee Jones'),
		('Nicolas','Cage'),
		('Djimon','Hounsou'),
		('Ben','Affleck'),
		('Orlando','Bloom'),
		('Alan','Rickman'),
		('John','Malkovich'),
		('Ben','Kingsley'),
		('Robin','Williams'),
		('Jeff','Bridges'),
		('Ian','McShane'),
		('Harrison','Ford'),
		('Jude','Law'),
		('Daniel','Craig'),
		('Colin','Firth'),
		('Robert','Pattinson'),
		('Keanu','Reeves'),
		('Robert','Downey Jr'),
		('John David','Washington'),
		('Kenneth','Branagh'),
		('Shia','LaBeouf'),
		('Josh','Duhamel'),
		('Javier','Bardem'),
		('Judi','Dench'),
		('Bérénice','Marlohe'),
		('Naomie','Harris'),
		('Anne','Hathaway'),
		('Emma','Watson'),
		('Jennifer','Connelly'),
		('Katie','Holmes'),
		('Zoe','Saldana'),
		('Daisy','Ridley'),
		('Mila','Kunis'),
		('Anya','Taylor Joy'),
		('Elizabeth','Olsen'),
		('Margot','Robbie'),
		('Scarlett','Johansson'),
		('Freida','Pinto'),
		('Natalie','Portman'),
		('Rachel','McAdams'),
		('Sanaa','Lathan'),
		('Paula','Patton'),
		('Amber','Heard'),
		('Gal','Gadot'),
		('Naomi','Scott'),
		('Ella','Balinska'),
		('Jennifer','Lawrence'),
		('Christina','Ricci'),
		('Blake','Lively'),
		('Haley','Bennett'),
		('Eva','Mendes'),
		('Kate','Beckinsale'),
		('Mónica','Cruz'),
		('Anna','Kendrick'),
		('Olivia','Wilde'),
		('Megan','Fox'),
		('Jessica','Biel'),
		('Catalina','Sandino Moreno'),
		('Gong','Li'),
		('Keira','Knightley'),
		('Rose','Byrne'),
		('Rebecca','Hall'),
		('Emily','Blunt'),
		('Rosario','Dawson'),
		('Christina','Hendricks'),
		('Jada Pinkett','Smith'),
		('Kristen','Stewart'),
		('Teresa','Palmer'),
		('Elizabeth','Hurley'),
		('Angelina','Jolie'),
		('Carrie Anne','Moss'),
		('Elizabeth','Debicki'),
		('Chris','Columbus'),
		('Alfonso','Cuaron'),
		('Mike','Newell'),
		('David','Yates'),
		('Laurence','Wachowski'),
		('Andrew Paul','Wachowski'),
		('Christopher','Nolan'),
		('Anthony','Russo'),
		('Joss','Whedon'),
		('Joe','Russo'),
		('Steven','Spielberg'),
		('Chad','Stahelski'),
		('Michael','Bay'),
		('Sam','Mendes')
;

INSERT INTO documentaires (code_documentaire,libelle,annee,telechargeable,prix_telechargement,id_type_documentaire)
    VALUES
        ('HAPOT1','Harry potter à l\'ecole_des sorciers',2001,1,5,),
		('HAPOT2','Harry potter et la Chambre des secrets',2002,1,5,),
		('HAPOT3','Harry potter et le Prisonnier d\'Azkaban',2004,1,5,),
		('HAPOT4','Harry potter et la Coupe de feu',2005,1,5,),
		('HAPOT5','Harry potter et l\'Ordre du Phénix',2007,1,5,),
		('HAPOT6','Harry potter et le Prince de sang-mêlé',2009,1,5,),
		('HAPOT7','Harry potter et les Reliques de la Mort, partie 1',2010,1,5,),
		('HAPOT8','Harry potter et les Reliques de la Mort, partie 2',2011,1,5,),
		('MATRX1','Matrix',1999,1,5,),
		('MATRX2','Matrix Reloaded',2003,1,5,),
		('MATRX3','Matrix Revolutions',2003,1,5,),
		('INTSTL','Interstellar',2014,1,5,),
		('TENET','TENET',2020,1,5,),
		('INCEPT','Inception',2010,1,5,),
		('BATMBG','Batman Begins',2005,1,5,),
		('BATMDK','Batman The Dark Knight',2008,1,5,),
		('BATMRS','Batman The Dark Knight Rises',2012,1,5,),
		('AVGRS1','Avengers',2012,1,5,182),
		('INDIJ1','Les Aventuriers de l\'arche perdue',1981,1,5,),
		('JONWI1','John Wick 1',2014,1,5,),
		('TRSFO1','Transformers 1',2007,1,5,),
		('SKYFAL','Skyfall',2012,1,5,)
;

-- RESULTSET TABLE STARS --
SELECT * FROM stars;

-- ! Tables à créer --
-- ! ADHERENTS
-- ! DOCUMENTAIRES
-- ! EXEMPLAIRES
-- ! LOCALISER
-- ! PARTICIPER
-- ! TELECHARGEMENTS
-- ! LOCATIONS

-- TODO REQUETES --
-- REQUETES AVEC JOINTURES --
