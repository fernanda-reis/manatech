const database = require("../database");

class PostagemDados {
  verPostagens() {
    let postagens = "";
    database.tbPostagens.map((obj) => {
      postagens +=
        obj.id +
        ". " +
        " (" +
        obj.categoria.descricao +
        ") " +
        "Título: " +
        obj.titulo +
        "\n" +
        obj.texto +
        "\n" +
        "Por: " +
        obj.autora.nome +
        "\n";
    });
    return postagens;
  }

  verPostagensPorCategoria(categoriaId) {
    const postagensFiltradas = database.tbPostagens.filter((obj) => {
      obj.categoria.id == categoriaId;
    });

    return postagensFiltradas;
  }
}

module.exports = PostagemDados;
