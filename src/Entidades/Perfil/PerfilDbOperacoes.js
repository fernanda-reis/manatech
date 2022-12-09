const { tbPerfis } = require("../../../database");
const { novoId } = require("../../Utils/Utils");
const PerfilValidacao = require("../Perfil/PerfilValidacao");

class PerfilDbOperacoes {
  #perfilValidacao = new PerfilValidacao();

  salvarPerfil(perfil) {
    if (this.#perfilValidacao.validarPerfil(perfil)) {
      perfil.id = novoId(tbPerfis);

      tbPerfis.push(perfil);

      return perfil;
    } else return `Perfil inválido.`;
  }
}

module.exports = PerfilDbOperacoes;
