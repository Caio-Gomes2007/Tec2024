<?php
include("connect.php");

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
	public function get_senha()
	{
		return $this->senha;
	}
	public function get_all() {}

	public function cadastrar($conn)
	{
		// Validação dos dados
		if (empty($this->nome)) {
			echo "O nome não pode ser vazio.";
			return false;
		}

		if (!filter_var($this->email, FILTER_VALIDATE_EMAIL)) {
			echo "E-mail inválido.";
			return false;
		}

		if (strlen($this->senha) < 6) {
			echo "A senha deve ter pelo menos 6 caracteres.";
			return false;
		}

		// Preparar a consulta SQL
		$stmt = $conn->prepare("INSERT INTO pessoa (nome, email, password) VALUES (?, ?, ?)");

		if ($stmt === false) {
			echo "Erro na preparação da query: " . $conn->error;
			return false;
		}

		// Vincular os parâmetros
		$stmt->bind_param("sss", $this->nome, $this->email, $this->senha);

		// Executar a consulta
		if ($stmt->execute()) {
			echo "Registro feito com sucesso!";
			header("Location: paginaSucesso.html"); // Substitua por sua página de destino
			exit(); // Certifique-se de sair após o redirecionamento
			$this->id = $conn->insert_id; // Armazenar o ID do registro inserido
			return true; // Retornar verdadeiro se a inserção foi bem-sucedida
		} else {
			echo "Erro na execução da consulta: " . $stmt->error;
			return false; // Retornar falso se houve erro
		}

		// Fechar o statement
		$stmt->close();
	}
};
