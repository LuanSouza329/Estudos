<?php 

/*
    Variáveis super globais no php, podem ser acessadas de qualquer lugar do projeto. 
    Elas contêm informações muito importante sobre servidor, url entre outras informações.
*/


var_dump(palindromo('luan'));

function localhost () : bool {
    $servidor = filter_input(INPUT_SERVER, 'SERVER_NAME');

    if ($servidor == 'localhost'){
        return true;
    }
    return false;
}



function palindromo (string $palavra) : bool {
    $palavra = preg_replace('/[^A-Za-z0-9]/', '', $palavra);
    $palavra = strtoupper($palavra);

    if ($palavra == strrev($palavra)){
        return true;
    }
    return false;

}