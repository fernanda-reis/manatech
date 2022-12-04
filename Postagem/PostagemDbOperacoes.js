const { novoId } = require("../Utils/Utils");
const database = require("../database");
const Postagem = require("./Postagem");
const PostagemValidacao = require("./PostagemValidacao");

class PostagemDbOperacoes {
  #postagemValidacao = new PostagemValidacao();

  salvarPostagem(postagem) {
    if (this.#postagemValidacao.validarPostagem(postagem)) {
      postagem.id = novoId(database.tbPostagens, postagem);
      database.tbPostagens.push(postagem);

      return `Postagem "${postagem.titulo}" criada!`;
    } else return `Postagem inválida.`;
  }
}
module.exports = PostagemDbOperacoes;
