const database = require("./database");
const Perfil = require("./Perfil/Perfil");
const PerfilValidacao = require("./Perfil/PerfilValidacao");
const PerfilDados = require("./Perfil/PerfilDados");
const Postagem = require("./Postagem/Postagem");
const PostagemDados = require("./Postagem/PostagemDados");
const PostagemDbOperacoes = require("./Postagem/PostagemDbOperacoes");
const Categoria = require("./Categoria/Categoria");
const Mentora = require("./Mentora/Mentora");
const PerfilDbOperacoes = require("./Perfil/PerfilDbOperacoes");

const dadosPostagem = new PostagemDados();
const operacoesPostagem = new PostagemDbOperacoes();
const operacoesPerfil = new PerfilDbOperacoes();
console.log(dadosPostagem.verPostagens());

const novoPerfil = new Mentora(
  "Juju",
  "sp",
  "to aqui pra ajudar :)",
  "analista ti"
);
console.log(operacoesPerfil.salvarPerfil(novoPerfil, database.tbMentoras));

const novaCategoria = new Categoria("Back-End");
database.tbCategorias.push(novaCategoria);

const novaPostagem = new Postagem(
  novoPerfil,
  novaCategoria,
  "Titulo da postagem",
  "Texto da postagem"
);

console.log(operacoesPostagem.salvarPostagem(novaPostagem));

console.log("POSTAGENS:");
console.log(dadosPostagem.verPostagens());
