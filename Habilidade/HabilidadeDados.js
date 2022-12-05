const { tbHabilidades } = require("../database");

class HabilidadeDbOperacoes {
  buscarHabilidadePorId(idHabilidade) {
    const habilidade = tbHabilidades.find((obj) => obj.id == idHabilidade);
    return habilidade;
  }
}

module.exports = HabilidadeDbOperacoes;
