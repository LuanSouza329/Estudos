<?php 


/* é muito importante criar filtros em php há algumas funções e contantes que nos permitem fazer verificações em nossos projetos */

var_dump(validarUrlFiltro('https://google.com'));

function validarUrlFiltro (string $url) : bool {
    if ($url < 10) {
        return false;
    }
     if (!str_contains($url, '.')) {
        return false;
    }else if (str_contains($url, 'http://') || str_contains($url, 'https://')) {
        return true;
    }else{ 
        return false;
    }
}

/*------------------------- */


/**
 * Função basica para verficar se é um e-mail
 * @param string $email
 * @return bool
 */
function verifica_email (string $email) : bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}