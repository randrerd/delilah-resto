--
-- Database: `delilah_resto`
--
--

--

-- Table structure for table `users`

CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` varchar(80) NOT NULL,
  `password` varchar(60) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `is_admin` BOOLEAN NOT NULL DEFAULT FALSE
);
-- Table structure for table `products`
--
CREATE TABLE `products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` varchar(50) NOT NULL,
  `product_image` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
);
-- Table structure for table `orders`
--
CREATE TABLE `orders` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `status` varchar(60) NOT NULL DEFAULT "Nuevo",
  `description` varchar(150) NOT NULL,
  `total` float NOT NULL,
  `user_id` int(11) NOT NULL,
  `payment_method` varchar(55) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);
-- Table structure for table `orders_products`
--
CREATE TABLE `orders_products` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(11) DEFAULT NULL,
  `product_quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  FOREIGN KEY(orderId) REFERENCES orders(id),
  FOREIGN KEY(productId) REFERENCES products(id)
);
-- Inserting data for table `users`
--
INSERT INTO `users` (
    `id`,
    `username`,
    `firstname`,
    `lastname`,
    `email`,
    `phone`,
    `address`,
    `password`,
    `createdAt`,
    `updatedAt`,
    `is_admin`
  )
VALUES (
    NULL,
    'randrerd',
    'Raul',
    'Roman',
    'raulandrerd@gmail.com',
    '+5491123938397',
    'Nombre de la Calle 345',
    '$2b$10$0DtI2aisfo0rAarRdE9iXuMrNqI9fVX2oOOOIPNIg2ghtToiNC57e',
    '2020-09-08 15:27:56',
    '2020-09-08 15:27:56',
    1
  ),
  (
    NULL,
    'randomuser',
    'Rahul',
    'Romano',
    'rahuldd@gmail.com',
    '+549112334397',
    'Numero de la Calle 3465',
    '$2b$10$0kTELfuQsgg6j3ykRkaYSeSv4ESr.19BIOg98c9qhgYfBec/ZTDlq',
    '2020-09-08 15:31:50',
    '2020-09-08 15:31:50',
    0
  ),
  (
    NULL,
    'randomuser4',
    'Rahaul',
    'Romasno',
    'rahu1dd@gmail.com',
    '+549112334397',
    'Numero de la Calle 3465',
    '$2b$10$1VoFzjFcabsa6CstYchmmOOkX7W/Aa.p7Y4WBiS6P3DzHY8UJ4f.y',
    '2020-09-08 15:41:34',
    '2020-09-08 15:41:34',
    0
  ),
  (
    NULL,
    'randomuser5',
    'Rahaul',
    'Romasno',
    'rahu1d1d@gmail.com',
    '+549112334397',
    'Numero de la Calle 3465',
    '$2b$10$/MXwXCsDPfXAGO3Jh5lpUOjEZ/kOnZLF1kFL77TyKwXr4MF7bk/z2',
    '2020-09-08 15:41:45',
    '2020-09-08 15:41:45',
    0
  ),
  (
    NULL,
    'admin2',
    'Raul',
    'Roman',
    'raulandrer1d@gmail.com',
    '+5491123938397',
    'Nombre de la Calle 345',
    '$2b$10$Exz4omJHUBz1SQrusV0BTOO7dPabqR1OYbJBJulma67IZuVDZkYMm',
    '2020-09-08 15:42:31',
    '2020-09-08 15:42:31',
    1
  );
--
-- Inserting data for table `products`
--
INSERT INTO `products` (
    `id`,
    `name`,
    `price`,
    `product_image`,
    `createdAt`,
    `updatedAt`
  )
VALUES (
    NULL,
    'VeganTaco',
    '425',
    'http://localhost:3000/uploads\\VeganTacos.jpg',
    '2020-09-08 15:36:22',
    '2020-09-08 15:36:22'
  ),
  (
    NULL,
    'NewVegBurger',
    '450',
    'http://localhost:3000/uploads\\burger.jpg',
    '2020-09-08 15:36:56',
    '2020-09-08 15:36:56'
  ),
  (
    NULL,
    'VeggieRice',
    '315',
    'http://localhost:3000/uploads\\VegRice.jpg',
    '2020-09-08 15:37:50',
    '2020-09-08 15:37:50'
  ),
  (
    NULL,
    'SpicyCurry',
    '512',
    'http://localhost:3000/uploads\\spicycurry.jpg',
    '2020-09-08 16:20:24',
    '2020-09-08 16:20:24'
  ),
  (
    NULL,
    'VeganMacAndCheese',
    '402',
    'http://localhost:3000/uploads\\vegamacandcheese.jpg',
    '2020-09-08 16:22:15',
    '2020-09-08 16:22:15'
  ),
  (
    NULL,
    'VeganEnchilada',
    '500',
    'http://localhost:3000/uploads\\veganenchilada.jpg',
    '2020-09-08 16:22:51',
    '2020-09-08 16:22:51'
  ),
  (
    NULL,
    'VeganCheeseDip',
    '175',
    'http://localhost:3000/uploads\\vegancheesedip.jpg',
    '2020-09-08 16:23:33',
    '2020-09-08 16:23:33'
  );
--
-- Inserting data for table `orders`
--
INSERT INTO `orders` (
    `id`,
    `status`,
    `description`,
    `total`,
    `user_id`,
    `payment_method`,
    `createdAt`,
    `updatedAt`
  )
VALUES (
    NULL,
    'Nuevo',
    '2xNewVegBurger 1xVeganTaco',
    1325,
    2,
    'TDC',
    '2020-09-08 16:03:49',
    '2020-09-08 16:03:49'
  ),
  (
    NULL,
    'Nuevo',
    '1xNewVegBurger 1xVeggieRice',
    765,
    2,
    'TDC',
    '2020-09-08 16:04:51',
    '2020-09-08 16:04:51'
  ),
  (
    NULL,
    'Nuevo',
    '2xNewVegBurger 1xVeganTaco',
    1325,
    2,
    'Efectivo',
    '2020-09-08 16:05:28',
    '2020-09-08 16:05:28'
  ),
  (
    NULL,
    'Nuevo',
    '2xNewVegBurger 1xVeganEnchilada',
    1400,
    1,
    'Efectivo',
    '2020-09-08 16:24:43',
    '2020-09-08 16:24:43'
  ),
  (
    NULL,
    'Nuevo',
    '2xVeggieRice 1xVeganCheeseDip',
    805,
    1,
    'Efectivo',
    '2020-09-08 16:24:59',
    '2020-09-08 16:24:59'
  );
--
-- Inserting data for table `orders_products`
--
INSERT INTO `orders_products` (
    `id`,
    `orderId`,
    `productId`,
    `product_quantity`,
    `createdAt`,
    `updatedAt`
  )
VALUES (
    NULL,
    1,
    3,
    2,
    '2020-09-08 16:03:49',
    '2020-09-08 16:03:49'
  ),
  (
    NULL,
    1,
    2,
    1,
    '2020-09-08 16:03:49',
    '2020-09-08 16:03:49'
  ),
  (
    NULL,
    2,
    3,
    1,
    '2020-09-08 16:04:51',
    '2020-09-08 16:04:51'
  ),
  (
    NULL,
    2,
    4,
    1,
    '2020-09-08 16:04:51',
    '2020-09-08 16:04:51'
  ),
  (
    NULL,
    3,
    3,
    2,
    '2020-09-08 16:05:28',
    '2020-09-08 16:05:28'
  ),
  (
    NULL,
    3,
    2,
    1,
    '2020-09-08 16:05:28',
    '2020-09-08 16:05:28'
  ),
  (
    NULL,
    4,
    3,
    2,
    '2020-09-08 16:24:43',
    '2020-09-08 16:24:43'
  ),
  (
    NULL,
    4,
    6,
    1,
    '2020-09-08 16:24:43',
    '2020-09-08 16:24:43'
  ),
  (
    NULL,
    5,
    4,
    2,
    '2020-09-08 16:24:59',
    '2020-09-08 16:24:59'
  ),
  (
    NULL,
    5,
    7,
    1,
    '2020-09-08 16:24:59',
    '2020-09-08 16:24:59'
  );