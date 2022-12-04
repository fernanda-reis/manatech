const Utils = require("../Utils/Utils");

class Postagem {
  id;
  data;
  autora;
  categoria;
  titulo;
  texto;

  constructor(autora, categoria, titulo, texto) {
    this.data = Utils.formataData();
    this.autora = autora;
    this.categoria = categoria;
    this.titulo = titulo;
    this.texto = texto;
  }
}

module.exports = Postagem;
