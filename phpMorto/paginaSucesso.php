<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Sucesso</title>
  <link href="css/style.css" rel="stylesheet">
</head>

<body>
  <h2>fodase</h2>
  <?php

  include("connect.php");
  include("user.php");
  include("pegarDados.php");
  $jesus->get_name($conn, 2);

  echo "teste";

  ?>
  <h1>fadsad</h1>
</body>

</html>
