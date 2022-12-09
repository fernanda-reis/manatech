const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentees } = require("../../../database");

class MenteeDados extends PerfilDados {
  verPerfis() {
    return tbMentees;
  }

  verPerfilPorId(menteeId) {
    const mentee = tbMentees.find((obj) => obj.id == menteeId);

    if (mentee !== undefined) {
      return mentee;
    } else return `Mentee não encontrada.`;
  }
}

module.exports = MenteeDados;
