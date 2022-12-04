const Perfil = require("../Perfil/Perfil");

class Mentora extends Perfil {
  bio;
  cargo;
  mentoradas = [];

  constructor(nome, localizacao, bio, cargo) {
    super(nome, localizacao);
    this.bio = bio;
    this.cargo = cargo;
  }

  cadastrarMentora() {}
}

module.exports = Mentora;
