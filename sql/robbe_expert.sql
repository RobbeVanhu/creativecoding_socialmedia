-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Gegenereerd op: 10 jan 2023 om 07:24
-- Serverversie: 5.5.68-MariaDB
-- PHP-versie: 7.4.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `robbe_expert`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `socialmedia_images`
--

CREATE TABLE `socialmedia_images` (
  `image_ID` int(11) NOT NULL,
  `image_users_ID` int(11) NOT NULL,
  `image_post_date` date NOT NULL,
  `image_active` int(11) NOT NULL,
  `image_favorite` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `socialmedia_images`
--

INSERT INTO `socialmedia_images` (`image_ID`, `image_users_ID`, `image_post_date`, `image_active`, `image_favorite`, `image_url`) VALUES
(1, 1, '2022-12-05', 0, 1, 'image1.jpg'),
(2, 2, '2022-12-07', 0, 0, 'image2.jpg'),
(3, 3, '2022-12-12', 0, 1, 'image3.jpg'),
(4, 1, '2022-12-14', 0, 1, 'image4.jpg'),
(5, 4, '2022-12-14', 0, 0, 'image5.jpg'),
(19, 5, '2022-12-18', 1, 1, 'image6.jpg'),
(20, 4, '2022-12-22', 0, 0, 'image7.jpg'),
(21, 2, '2022-12-23', 1, 1, 'image8.jpg'),
(22, 3, '2022-12-23', 1, 1, 'image9.jpg'),
(23, 2, '2022-12-23', 1, 1, 'image10.jpg'),
(24, 2, '2022-12-30', 0, 0, 'image11.jpg'),
(25, 3, '2023-01-01', 0, 0, 'image12.jpg'),
(26, 5, '2023-01-05', 1, 1, 'image13.jpg');

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `socialmedia_users`
--

CREATE TABLE `socialmedia_users` (
  `users_ID` int(11) NOT NULL,
  `users_username` varchar(200) DEFAULT NULL,
  `users_email` varchar(11) DEFAULT NULL,
  `users_password` varchar(11) DEFAULT NULL,
  `users_location` varchar(255) NOT NULL,
  `users_profile_image` varchar(255) NOT NULL,
  `users_image` int(11) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Gegevens worden geëxporteerd voor tabel `socialmedia_users`
--

INSERT INTO `socialmedia_users` (`users_ID`, `users_username`, `users_email`, `users_password`, `users_location`, `users_profile_image`, `users_image`) VALUES
(1, 'Admin Admin', 'admin@ap.be', 'admin', 'Antwerpen', 'admin.png', 1),
(2, 'Robbe Vanhuele', 'robbe@ap.be', 'robbe', 'Brasschaat', 'robbe.jpg', 2),
(3, 'Bart Vanhuele', 'bart@ap.be', 'bart', 'Brasschaat', 'bart.jpg', 3),
(4, 'Jesse Vanhuele', 'jesse@ap.be', 'jesse', 'Brasschaat', 'jesse.jpg', 4),
(5, 'Niels Vanhuele', 'niels@ap.be', 'niels', 'Brasschaat', 'niels.jpg', 5);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `socialmedia_images`
--
ALTER TABLE `socialmedia_images`
  ADD PRIMARY KEY (`image_ID`);

--
-- Indexen voor tabel `socialmedia_users`
--
ALTER TABLE `socialmedia_users`
  ADD PRIMARY KEY (`users_ID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `socialmedia_images`
--
ALTER TABLE `socialmedia_images`
  MODIFY `image_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT voor een tabel `socialmedia_users`
--
ALTER TABLE `socialmedia_users`
  MODIFY `users_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
