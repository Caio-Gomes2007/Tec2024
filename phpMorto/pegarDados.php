<?php

include("connect.php");
include("user.php");
$jesus = new User("jesus", "jesus@gmail.com", "fdssenha");
$jesus->cadastrar($conn);
$id = $jesus->get_id("jesus");
echo "foi?";
$jesus->get_name($conn, $id);
