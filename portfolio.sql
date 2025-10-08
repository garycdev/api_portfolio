-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-07-2024 a las 20:35:03
-- Versión del servidor: 11.4.2-MariaDB
-- Versión de PHP: 8.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `portfolio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dependencia`
--

CREATE TABLE `dependencia` (
  `id_dep` int(10) UNSIGNED DEFAULT NULL,
  `id_tec` int(10) UNSIGNED NOT NULL,
  `id_frame` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `framework`
--

CREATE TABLE `framework` (
  `id_frame` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nivel` enum('BASICO','INTERMEDIO','AVANZADO') NOT NULL,
  `estado` enum('0','1','2') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `id_pro` int(10) UNSIGNED NOT NULL,
  `titulo` varchar(100) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `estado` enum('0','1','2') NOT NULL DEFAULT '1',
  `url` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realizado`
--

CREATE TABLE `realizado` (
  `id_rea` int(10) UNSIGNED NOT NULL,
  `id_pro` int(10) UNSIGNED DEFAULT NULL,
  `id_frame` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnologia`
--

CREATE TABLE `tecnologia` (
  `id_tec` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nivel` enum('BASICO','INTERMEDIO','AVANZADO') NOT NULL,
  `estado` enum('0','1','2') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visitas`
--

CREATE TABLE `visitas` (
  `id_visita` int(11) NOT NULL,
  `ip` varchar(100) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `browser` varchar(255) NOT NULL,
  `hostname` varchar(255) NOT NULL,
  `device` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `dependencia`
--
ALTER TABLE `dependencia`
  ADD PRIMARY KEY (`id_frame`),
  ADD KEY `dependencia_id_tec_fk` (`id_tec`);

--
-- Indices de la tabla `framework`
--
ALTER TABLE `framework`
  ADD PRIMARY KEY (`id_frame`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`id_pro`);

--
-- Indices de la tabla `realizado`
--
ALTER TABLE `realizado`
  ADD PRIMARY KEY (`id_rea`),
  ADD KEY `realizado_id_frame_fk` (`id_frame`),
  ADD KEY `realizado_id_pro_fk` (`id_pro`);

--
-- Indices de la tabla `tecnologia`
--
ALTER TABLE `tecnologia`
  ADD PRIMARY KEY (`id_tec`);

--
-- Indices de la tabla `visitas`
--
ALTER TABLE `visitas`
  ADD PRIMARY KEY (`id_visita`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `framework`
--
ALTER TABLE `framework`
  MODIFY `id_frame` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `id_pro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `realizado`
--
ALTER TABLE `realizado`
  MODIFY `id_rea` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tecnologia`
--
ALTER TABLE `tecnologia`
  MODIFY `id_tec` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `visitas`
--
ALTER TABLE `visitas`
  MODIFY `id_visita` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `dependencia`
--
ALTER TABLE `dependencia`
  ADD CONSTRAINT `dependencia_id_frame_fk` FOREIGN KEY (`id_frame`) REFERENCES `framework` (`id_frame`),
  ADD CONSTRAINT `dependencia_id_tec_fk` FOREIGN KEY (`id_tec`) REFERENCES `tecnologia` (`id_tec`);

--
-- Filtros para la tabla `realizado`
--
ALTER TABLE `realizado`
  ADD CONSTRAINT `realizado_id_frame_fk` FOREIGN KEY (`id_frame`) REFERENCES `framework` (`id_frame`),
  ADD CONSTRAINT `realizado_id_pro_fk` FOREIGN KEY (`id_pro`) REFERENCES `proyectos` (`id_pro`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
