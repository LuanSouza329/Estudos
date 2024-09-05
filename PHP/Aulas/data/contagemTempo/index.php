<?php 

echo ContarTempo('2012-09-09 20:29:10');


function ContarTempo (string $data) : string
{
    date_default_timezone_set('America/Sao_Paulo');   
    
    $agora = strtotime(date('Y-m-d H:i:s'));

    $tempo = strtotime($data);

    $diferenca = $agora - $tempo;

    $segundo = $diferenca;

    $minutos = round($diferenca / 60);

    $horas = round($diferenca / 3600);

    $dias = round($diferenca / 86400);

    $semanas = round($diferenca / 604800);

    $meses = round($diferenca / 2419200);

    $anos = round($diferenca / 29030400);

    if ($segundo <= 60)
    {
        return 'Agora';
    } else if ($minutos <= 60){
        return $minutos == 1 ? 'há um minuto' : 'há '.$minutos.' minutos ';
    }else if ($horas <= 24) {
        return $horas == 1 ? 'há uma hora' : 'há '. $horas. ' horas';
    }else if ($dias <= 7) {
        return $dias == 1 ? 'há um dia' : 'há '. $dias. ' dias';
    }else if ($semanas <= 4){
        return $semanas == 1 ? 'Há uma semana' : 'há '.$semanas. ' semanas';
    }else if ($meses < 12){
        return $meses == 1 ? 'Há um mês' : 'há ' .$meses. ' meses';
    } else {
        return $anos == 1 ? 'Há um ano' : 'Há '.$anos. ' anos';
    }
}