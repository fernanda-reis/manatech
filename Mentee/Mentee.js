const Perfil = require("../Perfil/Perfil");

class Mentee extends Perfil {
  mentoras = [];

  constructor(nome, localizacao, area) {
    super(nome, localizacao, area);
  }
}

module.exports = Mentee;
