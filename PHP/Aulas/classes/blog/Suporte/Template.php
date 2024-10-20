<?php

namespace PHP\Aulas\Classes\Blog\Suporte;

class Template
{
    private \Twig\Environment $twig;

    public function __construct(string $diretorio) 
    {  
        $loader = new \Twig\Loader\FilesystemLoader($diretorio);
        $this->twig = new \Twig\Environment($loader);
    }

    public function renderizar (string $view, array $dados): string
    {
        return $this->twig->render($view, $dados);
    }
}
