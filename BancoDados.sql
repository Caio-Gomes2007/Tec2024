CREATE DATABASE bancoPessoas;
USE bancoPessoas;
CREATE TABLE pessoa(
	id INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL , 
	email VARCHAR(50) NOT NULL ,
	password VARCHAR(50) NOT NULL, 
       	PRIMARY KEY(id)	
);


