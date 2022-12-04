const Perfil = require("../Perfil/Perfil");

class Mentorada extends Perfil {
  mentoras = [];

  constructor(nome, localizacao) {
    super(nome, localizacao);
  }

  cadastrarMentorada() {}
}

module.exports = Mentorada;
