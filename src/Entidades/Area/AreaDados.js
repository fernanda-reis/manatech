const { tbAreas } = require("../../../database");

class AreaDados {
  listarAreas() {
    return tbAreas;
  }

  buscarAreaPorId(idArea) {
    const area = tbAreas.find((obj) => obj.id == idArea);
    return area;
  }
}

module.exports = AreaDados;
