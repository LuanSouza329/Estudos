<?php 

namespace PHP\Aulas\Classes\Core;

use PHP\Aulas\Classes\Core\Controlador;
class SiteControlador extends Controlador
{
    public function __construct()
    {
        parent::__construct(diretorio: "./Site/Views");
    }
    public function index () : void 
    {
        echo $this->template->renderizar(view: "index.html", dados: [
            'titulo' => 'teste de título'
        ]);
    }
    public function sobre () : void
    {
        echo "Página sobre";
    }
}