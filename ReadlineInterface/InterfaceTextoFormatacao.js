const database = require("../database");
const HabilidadeFormatacao = require("../Habilidade/HabilidadeFormatacao");

function formataHabilidades() {
  const formatador = new HabilidadeFormatacao();

  let retornoHabilidades = "";
  database.tbHabilidades.forEach((obj) => {
    retornoHabilidades += formatador.formataHabilidade(obj);
  });

  return retornoHabilidades;
}

module.exports = formataHabilidades;
