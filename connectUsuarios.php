
<?php

$VarTeste = "testado";
//variaveis para a conexão
$ServerName = "localhost";
$UserName = "root";
$Password = "";
$DatabaseName = "bancoPessoas";

$conn = new mysqli($ServerName,$UserName,$Password,$DatabaseName);
//testando conexão

if($conn->connect_error){
	die("Conexão falhou erro: " . $conn->connect_error);
};


?>
