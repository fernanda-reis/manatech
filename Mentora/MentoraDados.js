const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentoras } = require("../database");

class MentoraDados extends PerfilDados {
  verMentoras() {
    return super.verPerfis(tbMentoras);
  }

  verMentoraPorId(idMentora) {
    return super.verPerfilPorId(idMentora, tbMentoras);
  }

  verMentorasPorHabilidade(idHabilidade) {
    const mentoras = tbMentoras.filter((m) => {
      m.habilidades.id == idHabilidade;
    });

    return mentoras;
  }
}

module.exports = MentoraDados;
