class Categoria {
  id;
  descricao;
  postagens = [];

  constructor(id, descricao) {
    this.id = id;
    this.descricao = descricao;
  }

  cadastrarCategoria() {}
}

module.exports = Categoria;
