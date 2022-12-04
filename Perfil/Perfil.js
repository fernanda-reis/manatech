const Utils = require("../Utils/Utils");

class Perfil {
  id;
  data_registro;
  nome;
  localizacao;
  habilidades = [];

  constructor(nome, localizacao, habilidades) {
    this.data_registro = Utils.formataData();
    this.nome = nome;
    this.localizacao = localizacao;
    this.habilidades = habilidades;
  }
}

module.exports = Perfil;
