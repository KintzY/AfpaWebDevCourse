-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 25 avr. 2021 à 21:48
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `ecf3`
--
CREATE DATABASE IF NOT EXISTS `ecf3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `ecf3`;

-- --------------------------------------------------------

--
-- Structure de la table `bien_immobilier`
--

DROP TABLE IF EXISTS `bien_immobilier`;
CREATE TABLE `bien_immobilier` (
  `id_bien_immobilier` int(11) NOT NULL,
  `code_gestion` varchar(7) NOT NULL,
  `surface` smallint(6) NOT NULL,
  `nbre_pieces` smallint(6) NOT NULL,
  `loyer` smallint(6) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `id_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `bien_immobilier`
--

INSERT INTO `bien_immobilier` (`id_bien_immobilier`, `code_gestion`, `surface`, `nbre_pieces`, `loyer`, `adresse`, `id_client`) VALUES
(1, 'LOC0001', 100, 4, 500, 'Paris', 1),
(2, 'LOC0002', 50, 2, 250, 'Bordeaux', 2),
(3, 'LOC0003', 150, 5, 800, 'Strasbourg', 3);

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `id_client` int(11) NOT NULL,
  `code_client` varchar(7) NOT NULL,
  `nom` varchar(64) NOT NULL,
  `siren` varchar(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id_client`, `code_client`, `nom`, `siren`) VALUES
(1, 'CLI0001', 'Client1', '012345678'),
(2, 'CLI0002', 'Client2', '123456789'),
(3, 'CLI0003', 'Client3', '234567891');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `bien_immobilier`
--
ALTER TABLE `bien_immobilier`
  ADD PRIMARY KEY (`id_bien_immobilier`),
  ADD UNIQUE KEY `code_gestion` (`code_gestion`),
  ADD KEY `id_client` (`id_client`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id_client`),
  ADD UNIQUE KEY `code_client` (`code_client`),
  ADD UNIQUE KEY `siren` (`siren`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `bien_immobilier`
--
ALTER TABLE `bien_immobilier`
  MODIFY `id_bien_immobilier` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `bien_immobilier`
--
ALTER TABLE `bien_immobilier`
  ADD CONSTRAINT `id_client` FOREIGN KEY (`id_client`) REFERENCES `client` (`id_client`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

CREATE USER 'app_loc'@'localhost' IDENTIFIED BY '0/ZgT19gbZ/urzoV';
GRANT SELECT ON `ecf3`.* TO 'app_loc'@'localhost' IDENTIFIED BY '0/ZgT19gbZ/urzoV';

