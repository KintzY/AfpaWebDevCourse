<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHERCALCUL km * 0.12" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctetat="inactif" fctcode=""/>
    <F2 F2para="" F2defaut="" F2lignes="" F2etat="inactif"/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param totalAffichages="1000" totalBoucles="5000000" arrondiAuto="vrai" nbDecimales="8" epaisseurLigne="2" maxBoucle="500000" epaisseurPoint="2"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="Assurance EST_DU_TYPE NOMBRE" code="1#NOMBRE#Assurance"/>
        <item algoitem="Peinture EST_DU_TYPE NOMBRE" code="1#NOMBRE#Peinture"/>
        <item algoitem="Essence EST_DU_TYPE NOMBRE" code="1#NOMBRE#Essence"/>
        <item algoitem="km EST_DU_TYPE NOMBRE" code="1#NOMBRE#km"/>
        <item algoitem="Vitesse EST_DU_TYPE NOMBRE" code="1#NOMBRE#Vitesse"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="AFFICHER &quot;Voulez vous une assurance ? 1 pour oui ou 2 pour non.&quot;" code="4#Voulez vous une assurance ? 1 pour oui ou 2 pour non.#0"/>
        <item algoitem="LIRE Assurance" code="2#Assurance#pasliste"/>
        <item algoitem="SI (Assurance == 1) ALORS" code="6#Assurance == 1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Mise à jour indicateur assurance&quot;" code="4#Mise à jour indicateur assurance#1"/>
            <item algoitem="AFFICHER &quot;Message tableau de bord&quot;" code="4#Message tableau de bord#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;message tableau de bord&quot;" code="4#message tableau de bord#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="AFFICHER &quot;Avez vous repeint votre véhicule ? 1 pour oui ou 2 pour non&quot;" code="4#Avez vous repeint votre véhicule ? 1 pour oui ou 2 pour non#0"/>
        <item algoitem="LIRE Peinture" code="2#Peinture#pasliste"/>
        <item algoitem="SI (Peinture == 1) ALORS" code="6#Peinture == 1">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Mémorisé dans l'attribut correspondant&quot;" code="4#Mémorisé dans l'attribut correspondant#1"/>
            <item algoitem="AFFICHER &quot;Message de remerciement&quot;" code="4#Message de remerciement#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;message de remerciement&quot;" code="4#message de remerciement#0"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="AFFICHER &quot;Niveau carburant en quart (si 3/4 plein alors mettre 3)&quot;" code="4#Niveau carburant en quart (si 3/4 plein alors mettre 3)#0"/>
        <item algoitem="LIRE Essence" code="2#Essence#pasliste"/>
        <item algoitem="SI (Essence &lt; 4) ALORS" code="6#Essence &lt; 4">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHER &quot;Quantité à ajoutée&quot;" code="4#Quantité à ajoutée#1"/>
            <item algoitem="AFFICHERCALCUL 4 - Essence" code="20#4 - Essence#1"/>
            <item algoitem="AFFICHER &quot;Message feedback&quot;" code="4#Message feedback#1"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
            <item algoitem="SINON" code="9#sinon">
                <item algoitem="DEBUT_SINON" code="10#debutsinon"/>
                <item algoitem="AFFICHER &quot;Message erreur (ou remerciement seul autre option 4/4 donc full)&quot;" code="4#Message erreur (ou remerciement seul autre option 4/4 donc full)#1"/>
                <item algoitem="FIN_SINON" code="11#finsinon"/>
            </item>
        </item>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="" code="103#commentaire"/>
        <item algoitem="AFFICHER &quot;Quelle distance avez vous parcourue ? (en km)&quot;" code="4#Quelle distance avez vous parcourue ? (en km)#1"/>
        <item algoitem="LIRE km" code="2#km#pasliste"/>
        <item algoitem="LIRE Vitesse" code="2#Vitesse#pasliste"/>
        <item algoitem="SI (Vitesse &lt; 50) ALORS" code="6#Vitesse &lt; 50">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHERCALCUL km * 0.1" code="20#km * 0.1#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (50 &lt;= Vitesse &lt;90) ALORS" code="6#50 &lt;= Vitesse &lt;90">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHERCALCUL km * 0.05" code="20#km * 0.05#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (90 &lt;= Vitesse &lt;= 130) ALORS" code="6#90 &lt;= Vitesse &lt;= 130">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHERCALCUL km * 0.08" code="20#km * 0.08#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
        <item algoitem="SI (130 &lt; Vitesse) ALORS" code="6#130 &lt; Vitesse">
            <item algoitem="DEBUT_SI" code="7#debutsi"/>
            <item algoitem="AFFICHERCALCUL km * 0.12" code="20#km * 0.12#0"/>
            <item algoitem="FIN_SI" code="8#finsi"/>
        </item>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
