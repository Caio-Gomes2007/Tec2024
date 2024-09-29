<?php
include("connectUsuarios.php");

class User
{
	private $id;
	private $nome;
	private $email;
	private $senha;

	public function __construct($nome, $email, $senha)
	{
		$this->nome = $nome;
		$this->email = $email;
		$this->senha = $senha;
	}
	public function get_name()
	{
		echo $this->nome;
	}
	public function get_email()
	{
		return $this->email;
	}
	public function get_password()
	{
		return $this->senha;
	}
	public function cadastrar($conn)
	{
		$sql = "INSERT INTO pessoa (nome,email,password) VALUES ('$this->nome', '$this->email','$this->senha')";
		if ($conn->query($sql) == true) {
			echo "registro feito";
			$this->id = $conn->insert_id;
		} else {
			echo "erro" . $sql . "<br>" . $conn->error;
		}
	}
	public function get_id()
	{
		return $this->id;
	}
};
