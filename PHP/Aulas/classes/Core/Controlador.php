<?php 


namespace PHP\Aulas\Classes\Core;

class Controlador {
    public $tema = null;
    
    public function __construct(string $tema) {
        $this->tema = $tema;
    }
}