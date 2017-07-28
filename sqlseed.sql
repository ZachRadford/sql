-- DROP DATABASE IF EXISTS FF7;
CREATE DATABASE FF7;

USE FF7;

CREATE TABLE characters(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  weapon VARCHAR(45) NOT NULL,
  age INT(3) NOT NULL,
  limitBreak VARCHAR (45),
  PRIMARY KEY (id)
);

INSERT INTO characters (name, weapon, age, limitbreak)
VALUES 
("Cloud", "Buster Sword", 21, 'Omnislash'),
("Sephiroth", "Masamune", 27, 'Super Nova');


