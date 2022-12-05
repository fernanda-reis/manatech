const { tbCategorias } = require("../database");

class CategoriaDbOperacoes {
  buscarCategoriaPorId(idCategoria) {
    const categoria = tbCategorias.find((obj) => obj.id == idCategoria);
    return categoria;
  }
}
module.exports = CategoriaDbOperacoes;
