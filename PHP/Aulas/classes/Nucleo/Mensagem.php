<?php 

class Mensagem {

    private $texto; /**Atributo com a sua visibilidade privada que somente será mudada através da Classe e seus métodos*/
    private $css;
    
    public function renderizar () : string {
        return "<div class='{$this->css}'>{$this->texto}</div>";
    }
    private function filtrar (string $mensagem) : string {
        return filter_var(value: trim(string: strip_tags(string: $mensagem)), filter: FILTER_SANITIZE_SPECIAL_CHARS);
    }
    public function sucesso (string $mensagem) : Mensagem {

        $this->css = "alert alert-success";

        $this->texto = $this->filtrar(mensagem: $mensagem);

        return $this;
    }
}