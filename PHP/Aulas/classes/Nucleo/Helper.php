<?php 

namespace PHP\Aulas\Classes\Nucleo;

class Helper 
{
    public static function dizerOla (): string{
        return "Olá mundo";
    }
    public static function teste (): string {
        return self::dizerOla();  /*Para chamar um método estático dentro da própria classe usa-se SELF + :: */
    }
    public static function soma (int $n1, int $n2) : int {
        return $n1+$n2;
    }
}