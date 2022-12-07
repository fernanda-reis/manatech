const database = require("../database");
const PerfilDbOperacoes = require("../Perfil/PerfilDbOperacoes");
const Mentora = require("../Mentora/Mentora");
const Mentee = require("../Mentee/Mentee");
const perfilDb = new PerfilDbOperacoes();

function cadastrarMentora(dadosMentora) {
  const { nome, localizacao, habilidades, bio, cargo } = dadosMentora;

  const novaMentora = new Mentora(nome, localizacao, habilidades, bio, cargo);

  const retorno = perfilDb.salvarPerfil(novaMentora, database.tbMentoras);

  return retorno;
}

function cadastrarMentee(dadosMentee) {
  const { nome, localizacao, habilidades } = dadosMentee;

  const novaMentee = new Mentee(nome, localizacao, habilidades);

  const retorno = perfilDb.salvarPerfil(novaMentee, database.tbMentee);

  return retorno;
}

module.exports = { cadastrarMentora, cadastrarMentee };
