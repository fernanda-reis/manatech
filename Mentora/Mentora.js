const Perfil = require("../Perfil/Perfil");

class Mentora extends Perfil {
  bio;
  cargo;
  mentees = [];

  constructor(nome, localizacao, area, bio, cargo) {
    super(nome, localizacao, area);
    this.bio = bio;
    this.cargo = cargo;
  }
}

module.exports = Mentora;
