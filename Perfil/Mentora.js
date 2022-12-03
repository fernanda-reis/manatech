class Mentora extends Perfil {
  bio;
  cargo;
  mentoradas = [];

  constructor(id, nome, localizacao, bio, cargo) {
    super(id, nome, localizacao);
    this.bio = bio;
    this.cargo = cargo;

    console.log(`Mentora ${this.nome} cadastrada!`);
  }

  cadastrarMentora() {}
}

module.exports = Mentora;
