<?php 


namespace Estudos\PHP\vendor;

class Controlador {
    public $tema = null;
    
    public function __construct(string $tema) {
        $this->tema = $tema;
    }
}