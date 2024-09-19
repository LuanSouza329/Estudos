<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Classes</title>
</head>
<body>
    
</body>
</html>

<?php 

include './Nucleo/Mensagem.php';

use PHP\Aulas\Classes\Nucleo\Mensagem; /*Para usar clases que usam o nameSpace usamos a palavra reservada use, somente sendo chamada assim que iremos poder instanciar nosssas classes */

// echo $msg->sucesso(mensagem: "Mensagem de sucesso")->renderizar(); /*Encadeamento de métodos, podemos chamar mais de um método de uma vez */



echo (new Mensagem())->texto(mensagem: "Olá mundo");