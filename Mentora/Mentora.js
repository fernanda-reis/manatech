const Perfil = require("../Perfil/Perfil");

class Mentora extends Perfil {
  bio;
  cargo;
  mentees = [];

  constructor(nome, localizacao, habilidades, bio, cargo) {
    super(nome, localizacao, habilidades);
    this.bio = bio;
    this.cargo = cargo;
  }
}

module.exports = Mentora;
