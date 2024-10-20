<?php 


namespace PHP\Aulas\Classes\Core;
use PHP\Aulas\Classes\Blog\Suporte\Template;



class Controlador 
{
    protected Template $template;
    public $tema = null;
    
    public function __construct(string $diretorio) 
    {
        $this->template = new Template(diretorio: $diretorio);
    }
}