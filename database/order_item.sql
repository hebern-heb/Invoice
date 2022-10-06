-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 06, 2022 at 03:03 AM
-- Server version: 5.5.65-MariaDB
-- PHP Version: 7.4.6RC1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `invoice_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `invoice_order`
--

CREATE TABLE `invoice_order` (
  `order_id` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `order_receiver_name` varchar(250) NOT NULL,
  `order_receiver_address` text NOT NULL,
  `order_total_with_tax` decimal(10,2) NOT NULL,
  `order_total_without_tax` decimal(10,2) NOT NULL,
  `order_tax_amount` decimal(10,2) NOT NULL,
  `order_discount_type` char(10) NOT NULL,
  `order_discount_amount` decimal(10,2) NOT NULL,
  `order_total_discount` decimal(10,2) NOT NULL,
  `order_total_amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `invoice_order`
--

INSERT INTO `invoice_order` (`order_id`, `order_date`, `order_receiver_name`, `order_receiver_address`, `order_total_with_tax`, `order_total_without_tax`, `order_tax_amount`, `order_discount_type`, `order_discount_amount`, `order_total_discount`, `order_total_amount`) VALUES
(694, '2022-10-06 00:02:59', 'Mila', 'Mila test adress', '543910.00', '494750.00', '49160.00', 'percentage', '20.00', '108782.00', '435128.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invoice_order`
--
ALTER TABLE `invoice_order`
  ADD PRIMARY KEY (`order_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invoice_order`
--
ALTER TABLE `invoice_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=705;
COMMIT;
