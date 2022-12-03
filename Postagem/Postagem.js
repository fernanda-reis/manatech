const Perfil = require("../Perfil/Perfil");
const Categoria = require("../Categoria/Categoria");
const Utils = require("../Utils/Utils");

class Postagem {
  id;
  data = new Date();
  autora;
  categoria;
  texto;

  constructor(id, autora, categoria, texto) {
    if (autora instanceof Perfil) {
      if (categoria instanceof Categoria) {
        this.id = id;
        this.data = Utils.formataData(this.data_registro);
        this.categoria = categoria;
        this.texto = texto;

        console.log(`Postagem publicada!`);
      } else throw new Error(`Categoria inválida.`);
    } else throw new Error(`Autora inválida.`);
  }

  criarPostagem() {}
  editarPostagem() {}
}

module.extends = Postagem;
