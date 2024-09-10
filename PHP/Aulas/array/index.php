<?php 

$meses = [ 1 => 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];

array_push($meses, 'Julho');


foreach ($meses as $chave => $valor){
    echo 
    "<ul> 
        <li> 
            {$chave} {$valor} 
        </li> 
    </ul> ";
}


/**
 * Função de leitura de arrays
 * @param array $array
 * @return void
 */
function leitura (array $array) : void {
    $idx = count($array);

    for ($c = 0; $c < $idx; $c++)
    {
        echo  $array[$c] . "<br>";
    }
}


$numeros = [1,2,3,4,5,6,7,8];

echo soma($numeros);

function soma (array $array) : int{
    $resultado = 0;

    $size = count($array);

    for ($count = 0; $count < $size; $count++)
    {
        $resultado += $array[$count];
    }
    return $resultado;

}