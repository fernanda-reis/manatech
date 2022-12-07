const { tbPerfis } = require("../database");

class PerfilDados {
  verPerfis() {
    return tbPerfis;
  }

  verPerfilPorId(perfilId) {
    const perfil = tbPerfis.find((obj) => obj.id == perfilId);

    if (perfil !== undefined) {
      return perfil;
    } else return `Perfil não encontrado.`;
  }
}

module.exports = PerfilDados;
