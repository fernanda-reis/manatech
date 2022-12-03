const Utils = require("../Utils/Utils");

class Perfil {
  id;
  data_registro = new Date();
  nome;
  localizacao;
  habilidades = [];
  postagens = [];

  constructor(id, nome, localizacao = { cidade, estado }) {
    this.id = id;
    this.data_registro = Utils.formataData(this.data_registro);
    this.nome = nome;
    this.localizacao = localizacao;
  }

  adicionarHabilidade() {}
  atualizarHabilidade() {}
}

module.exports = Perfil;
