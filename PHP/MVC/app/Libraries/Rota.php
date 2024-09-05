<?php 

class Rota {

    private $controlador = 'Paginas';
    public function __construct() {
        $url = $this->url() ? $this->url() : [0];

        if (file_exists('../app/Controllers/'.ucwords($url[0]).'.php')){
            $this->controlador = ucwords($url[0]);
            unset($url[0]);
        }
        
        require_once '../app/Controllers/'.$this->controlador.'.php';

        $this->controlador = new $this->controlador;

        var_dump($this);
    }

    private function url() {
        // Captura a URI completa
        $uri = $_SERVER['REQUEST_URI'];
    
        // Remove a parte inicial da URL, por exemplo, "/index.php" se necessário
        $url = str_replace('/index.php', '', $uri);
    
        // Remove a barra inicial e final se houver
        $url = trim($url, '/');
    
        // Se a URL estiver vazia, retornar null
        if (empty($url)) {
            return null;
        }
    
        // Divide a URL em partes
        $urlParts = explode('/', $url);
    
        return $urlParts;
    }
    
} 