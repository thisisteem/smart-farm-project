-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 14, 2022 at 07:29 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smart_farm`
--

-- --------------------------------------------------------

--
-- Table structure for table `system_setting`
--

CREATE TABLE `system_setting` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `wifiName` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `wifiPassword` varchar(36) CHARACTER SET utf8 NOT NULL,
  `plantCategory` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `boardNumber` varchar(100) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `system_setting`
--

INSERT INTO `system_setting` (`id`, `wifiName`, `wifiPassword`, `plantCategory`, `boardNumber`) VALUES
('45ecd246-d44b-48ef-b9f4-5b5458ad1154', 'new_wifi', '987654321a', 'ต้นไม้ของพ่อ', '172.141.31.1');

-- --------------------------------------------------------

--
-- Table structure for table `temp_setting`
--

CREATE TABLE `temp_setting` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `temperature` float NOT NULL,
  `duration` int(255) NOT NULL,
  `relay_1` tinyint(1) NOT NULL,
  `relay_2` tinyint(1) NOT NULL,
  `relay_3` tinyint(1) NOT NULL,
  `relay_4` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `temp_setting`
--

INSERT INTO `temp_setting` (`id`, `temperature`, `duration`, `relay_1`, `relay_2`, `relay_3`, `relay_4`) VALUES
('93c817ef-b2de-4525-8578-2e3bb5cad325', 50, 50, 0, 1, 1, 0),
('af301b58-b83c-48ae-b885-d782bb369069', 37.5, 50, 0, 1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `time_setting`
--

CREATE TABLE `time_setting` (
  `id` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `day` int(11) NOT NULL,
  `duration` float NOT NULL,
  `startTime_hour` int(36) NOT NULL,
  `startTime_minute` int(36) NOT NULL,
  `relay_1` tinyint(1) NOT NULL,
  `relay_2` tinyint(1) NOT NULL,
  `relay_3` tinyint(1) NOT NULL,
  `relay_4` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `time_setting`
--

INSERT INTO `time_setting` (`id`, `day`, `duration`, `startTime_hour`, `startTime_minute`, `relay_1`, `relay_2`, `relay_3`, `relay_4`) VALUES
('cee59b81-e70b-4c25-86b2-7506817fca09', 1, 50, 9, 0, 1, 0, 0, 1),
('ff6df087-7092-4d4c-96a5-3822f91b0e67', 1, 50, 9, 0, 1, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `username` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(36) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`username`, `password`, `name`) VALUES
('admin', 'admin', 'Administrator'),
('admin2', '1234', 'Teem');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `system_setting`
--
ALTER TABLE `system_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `temp_setting`
--
ALTER TABLE `temp_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `time_setting`
--
ALTER TABLE `time_setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
