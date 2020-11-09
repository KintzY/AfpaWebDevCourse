<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="AFFICHER max" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2para="" F2defaut="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" totalBoucles="5000000" arrondiAuto="vrai" totalAffichages="1000" nbDecimales="8"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#nombreSaisie" algoitem="nombreSaisie EST_DU_TYPE NOMBRE"/>
        <item code="1#LISTE#listeNombreSaisie" algoitem="listeNombreSaisie EST_DU_TYPE LISTE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#nb" algoitem="nb EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#min" algoitem="min EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#max" algoitem="max EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#somme" algoitem="somme EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#moyenne" algoitem="moyenne EST_DU_TYPE NOMBRE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#nb#0#pasliste" algoitem="nb PREND_LA_VALEUR 0"/>
        <item code="2#nombreSaisie#pasliste" algoitem="LIRE nombreSaisie"/>
        <item code="15#nombreSaisie != 0" algoitem="TANT_QUE (nombreSaisie != 0) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="5#listeNombreSaisie#nombreSaisie#nb" algoitem="listeNombreSaisie[nb] PREND_LA_VALEUR nombreSaisie"/>
            <item code="5#nb#nb+1#pasliste" algoitem="nb PREND_LA_VALEUR nb+1"/>
            <item code="2#nombreSaisie#pasliste" algoitem="LIRE nombreSaisie"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
        <item code="5#somme#ALGOBOX_SOMME(listeNombreSaisie,0,nb-1)#pasliste" algoitem="somme PREND_LA_VALEUR ALGOBOX_SOMME(listeNombreSaisie,0,nb-1)"/>
        <item code="4#Somme = #0" algoitem="AFFICHER &quot;Somme = &quot;"/>
        <item code="3#somme#1#pasliste" algoitem="AFFICHER somme"/>
        <item code="5#moyenne#ALGOBOX_MOYENNE(listeNombreSaisie, 0, nb-1)#pasliste" algoitem="moyenne PREND_LA_VALEUR ALGOBOX_MOYENNE(listeNombreSaisie, 0, nb-1)"/>
        <item code="4#Moyenne = #0" algoitem="AFFICHER &quot;Moyenne = &quot;"/>
        <item code="3#moyenne#1#pasliste" algoitem="AFFICHER moyenne"/>
        <item code="5#min#ALGOBOX_MINIMUM(listeNombreSaisie, 0, nb -1)#pasliste" algoitem="min PREND_LA_VALEUR ALGOBOX_MINIMUM(listeNombreSaisie, 0, nb -1)"/>
        <item code="4#Nombre Minimum = #0" algoitem="AFFICHER &quot;Nombre Minimum = &quot;"/>
        <item code="3#min#1#pasliste" algoitem="AFFICHER min"/>
        <item code="5#max#ALGOBOX_MAXIMUM(listeNombreSaisie, 0, nb -1)#pasliste" algoitem="max PREND_LA_VALEUR ALGOBOX_MAXIMUM(listeNombreSaisie, 0, nb -1)"/>
        <item code="4#Nombre Maximum = #0" algoitem="AFFICHER &quot;Nombre Maximum = &quot;"/>
        <item code="3#max#1#pasliste" algoitem="AFFICHER max"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
