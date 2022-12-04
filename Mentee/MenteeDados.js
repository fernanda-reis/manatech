const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentee } = require("../database");

class MenteeDados extends PerfilDados {
  verMentees() {
    return super.verPerfis(tbMentee);
  }

  verMenteePorId(idMentee) {
    return super.verPerfilPorId(idMentee, tbMentee);
  }
}

module.exports = MenteeDados;
