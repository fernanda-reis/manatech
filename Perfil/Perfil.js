const Utils = require("../Utils/Utils");

class Perfil {
  id;
  data_registro;
  nome;
  localizacao;
  habilidades = [];

  constructor(nome, localizacao) {
    this.data_registro = Utils.formataData();
    this.nome = nome;
    this.localizacao = localizacao;
  }
}

module.exports = Perfil;
