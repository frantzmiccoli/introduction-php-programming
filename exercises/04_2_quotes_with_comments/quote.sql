-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Ven 01 Novembre 2013 à 23:52
-- Version du serveur: 5.1.44
-- Version de PHP: 5.3.1

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `quotes`
--

-- --------------------------------------------------------

--
-- Structure de la table `quote`
--

CREATE TABLE IF NOT EXISTS `quote` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) NOT NULL,
  `quote` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Contenu de la table `quote`
--

INSERT INTO `quote` (`id`, `author`, `quote`) VALUES
(1, 'Arthur Conan Doyle', 'There is nothing more deceptive than an obvious fact.'),
(2, 'Alan Moore', 'Sexually progressive cultures gave us literature, philosophy, civilization and the rest, while sexually restrictive cultures gave us the Dark Ages and the Holocaust.'),
(3, 'Howard Philips Lovecraft', '[...] for doubt and secrecy are the lure of lures, and no new horror can be more terrible than the daily torture of the commonplace.'),
(4, 'Dante Alighieri', 'Abandon all hope, you who enter here.'),
(5, 'Chuck Palahniuk', 'The only way to find true happiness is to risk being completely cut open.'),
(6, 'Niccolo Machiavelli', 'It is double pleasure to deceive the deceiver.'),
(7, 'Denis Diderot', 'There is only one passion, the passion for happiness.');
(8, 'Friedrich Nietzsche', 'In heaven, all the interesting people are missing.');

