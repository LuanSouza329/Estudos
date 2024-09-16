<?php 

date_default_timezone_set(timezoneId: 'America/Sao_Paulo'); /*Fuso horário SP* - Este tipo de config deve ser deixado no arquivo de configuração do projeto*/

$data = date (format: 'd-M-Y H:i:s');

echo $data;