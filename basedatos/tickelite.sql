-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-05-2025 a las 17:35:07
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tickelite`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `administrador`
--

CREATE TABLE `administrador` (
  `idAdministrador` int(10) NOT NULL,
  `documento` varchar(10) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL DEFAULT 'Administrador ',
  `estado` varchar(20) NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `administrador`
--

INSERT INTO `administrador` (`idAdministrador`, `documento`, `nombres`, `telefono`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(1, '12345676', 'anita lopez lopez', '3331598745', 'anita@gmail.com', '123456', 'Administrador ', 'Activo'),
(2, '12345675', 'panita rios rios', '3254489521', 'panita@gmail.com', '132465', 'Administrador ', 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario`
--

CREATE TABLE `calendario` (
  `idCalendario` int(10) NOT NULL,
  `nomEvent` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFin` datetime NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `idUsuario` int(10) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `opcionesEntrada` varchar(100) NOT NULL,
  `recordatorios` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `idEvento` int(10) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFin` datetime NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `organizadorId` int(10) NOT NULL,
  `recordatorios` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `documento` varchar(10) NOT NULL,
  `nombres` varchar(100) NOT NULL,
  `telefono` varchar(10) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `rol` varchar(20) NOT NULL DEFAULT 'Cliente',
  `estado` varchar(20) NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `documento`, `nombres`, `telefono`, `correo`, `contrasena`, `rol`, `estado`) VALUES
(1, '12345678', 'pepito perez perez', '3002222222', 'pepito@gmail.com', '12345', 'Cliente', 'Activo'),
(2, '12345679', 'fulanito mazo mazo', '3002222221', 'fulanito@gmail.com', '12345', 'Cliente', 'Activo'),
(3, '12345677', 'Juanita Perez Mazo', '3002222223', 'juanita@gmail.com', '12345678', 'Cliente', 'Activo'),
(4, '1234567887', 'olivia rios plao', '3004598756', 'olivia@gmail.com', '$2b$10$nF1HplQvFATVfKFDqQxeAuVCrTCxnVMAMY3jUPyMyipPGxzyAsuwm', 'Cliente', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `administrador`
--
ALTER TABLE `administrador`
  ADD PRIMARY KEY (`idAdministrador`),
  ADD UNIQUE KEY `documento` (`documento`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- Indices de la tabla `calendario`
--
ALTER TABLE `calendario`
  ADD PRIMARY KEY (`idCalendario`),
  ADD UNIQUE KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`idEvento`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `documento` (`documento`),
  ADD UNIQUE KEY `telefono` (`telefono`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `administrador`
--
ALTER TABLE `administrador`
  MODIFY `idAdministrador` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `calendario`
--
ALTER TABLE `calendario`
  MODIFY `idCalendario` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `idEvento` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
