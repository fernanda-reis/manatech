const { tbPerfis } = require("../database");
const { novoId } = require("../Utils/Utils");
const PerfilValidacao = require("./PerfilValidacao");

class PerfilDbOperacoes {
  #perfilValidacao = new PerfilValidacao();

  salvarPerfil(perfil, listaPerfil) {
    if (this.#perfilValidacao.validarPerfil(perfil)) {
      perfil.id = novoId(tbPerfis);

      tbPerfis.push(perfil);
      listaPerfil.push(perfil);

      return `Perfil da ${perfil.nome} criado!`;
    } else return `Perfil inválido.`;
  }

  buscarPerfilPorId(idPerfil) {
    const perfil = tbPerfis.find((obj) => obj.id == idPerfil);
    return perfil;
  }
}

module.exports = PerfilDbOperacoes;
