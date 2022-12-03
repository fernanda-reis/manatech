class Mentorada extends Perfil {
  mentoras = [];

  constructor(id, nome, localizacao) {
    super(id, nome, localizacao);

    console.log(`Mentora ${this.nome} cadastrada!`);
  }

  cadastrarMentorada() {}
}

module.exports = Mentorada;
