<?php

saudacao();

echo saudacaoMap();

function saudacao () : void {

    date_default_timezone_set(timezoneId: 'America/Sao_Paulo');

    $data = date(format: 'H');

    switch ($data){
        case $data > 00 && $data < 12:
            echo "Bom dia";
            break;
        case $data > 11 && $data < 18:
            echo "Boa tarde";
            break;
        default:
            echo "Boa noite";
            break;  
    }
}

/**
 * Prover uma saudação baseada na hora
 * @return string
 */
function saudacaoMap () : string {
    date_default_timezone_set(timezoneId: 'America/Sao_Paulo');

    $data = (int)date(format: 'H');
    
/**
 * Match é uma nova notação para fazer uma condição
 * Ela chegou no PHP 8.0;
 */

    $saudaçao2 = match (true) {
        $data > 00 && $data < 12 => " Bom dia",
        $data > 11 && $data < 18 => " Boa tarde",
        default => " Boa noite"
    };
    return $saudaçao2;
}