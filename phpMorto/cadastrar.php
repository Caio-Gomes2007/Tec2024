
<?php
include "connect.php";
echo "teste1";
include "user.php";


$nome = $_POST["nome"];
$email = $_POST["email"];
$password = $_POST["password"];




$user = new User($nome, $email, $password);
$user->cadastrar($conn);







?>
