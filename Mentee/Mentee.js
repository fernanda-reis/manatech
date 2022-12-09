const Perfil = require("../Perfil/Perfil");

class Mentee extends Perfil {
  mentoras = [];

  constructor(nome, localizacao, habilidades) {
    super(nome, localizacao, habilidades);
  }
}

module.exports = Mentee;
