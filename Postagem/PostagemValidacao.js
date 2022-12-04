const database = require("../database");
const Postagem = require("./Postagem");

class PostagemValidacao {
  validarPostagem(postagem) {
    if (postagem instanceof Postagem) {
      const autora = database.tbPerfis.find((a) => a.id == postagem.autora.id);
      if (autora) {
        const categoria = database.tbCategorias.find(
          (c) => c.id == postagem.categoria.id
        );
        if (categoria) {
          return true;
        }
      }

      return false;
    }
  }
}

module.exports = PostagemValidacao;
