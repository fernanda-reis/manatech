const { tbAreas } = require("../database");

class AreaDbOperacoes {
  buscarAreaPorId(idArea) {
    const area = tbAreas.find((obj) => obj.id == idArea);
    return area;
  }
}

module.exports = AreaDbOperacoes;
