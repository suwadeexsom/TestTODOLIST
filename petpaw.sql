-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 13, 2022 at 06:09 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `petpaw`
--

-- --------------------------------------------------------

--
-- Table structure for table `todoitem`
--

CREATE TABLE `todoitem` (
  `id` int(11) NOT NULL,
  `list_id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `done` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todoitem`
--

INSERT INTO `todoitem` (`id`, `list_id`, `content`, `created_at`, `done`) VALUES
(1, 1, 'test', '2022-09-08 11:54:04', 0);

-- --------------------------------------------------------

--
-- Table structure for table `todolistt`
--

CREATE TABLE `todolistt` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `todolistt`
--

INSERT INTO `todolistt` (`id`, `name`, `created_at`, `active`) VALUES
(1, 'test1', '2022-09-08 11:51:32', 1),
(6, 'test2', '0000-00-00 00:00:00', 1),
(8, 'test8', '2015-10-26 00:00:00', 1),
(9, 'test9', '2022-09-08 11:51:32', 1),
(10, 'test10', '0000-00-00 00:00:00', 1),
(11, 'test11', '0000-00-00 00:00:00', 1),
(98, 'som', '0000-00-00 00:00:00', 0),
(99, 'db', '0000-00-00 00:00:00', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todoitem`
--
ALTER TABLE `todoitem`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_id` (`list_id`);

--
-- Indexes for table `todolistt`
--
ALTER TABLE `todolistt`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todoitem`
--
ALTER TABLE `todoitem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `todolistt`
--
ALTER TABLE `todolistt`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `todoitem`
--
ALTER TABLE `todoitem`
  ADD CONSTRAINT `todoitem_ibfk_1` FOREIGN KEY (`list_id`) REFERENCES `todolistt` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
