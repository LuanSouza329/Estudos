<?php 

/**
 * URL amigáveis.
 * URLs amigáveis são endereços web que são fáceis de ler e entender, tanto para os usuários quanto para os mecanismos de busca (SEO - Search Engine Optimization). Elas geralmente são curtas, descritivas e fazem sentido em linguagem natural, em vez de conter parâmetros complexos ou IDs de banco de dados.
 */


var_dump(urlAmiga(" ----$@%@---[]---------#%$----&*@*(--------------  "));

 function urlAmiga (string $string) : string{
    $teste = ['------', '-----', '----', '---', '--'];
    $mapa['substituir'] = "/#@$%*&%|{}[]"; //array recebendo caracteres que serão substituído

    $mapa['substituido'] = "aaaaaabbbbbbbbbbbb"; //Substitutos

    $url = strtr(utf8_decode($string), utf8_decode($mapa['substituir']), utf8_decode( $mapa['substituido'])); //função que verifica se há caracteres para substituir e coloca substituto

    $url = strip_tags(trim($url)); //função que limpara tags e removera espaços do começoe  fim;

    $url = str_replace(' ', '_', $url); //substitui espaços do meio da string por underline.

    $url = str_replace($teste, '_', $url);

    return $url;
 }