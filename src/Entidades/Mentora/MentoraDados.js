const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentoras } = require("../../../database");

class MentoraDados extends PerfilDados {
  verPerfis() {
    return tbMentoras;
  }

  verPerfilPorId(mentoraId) {
    const mentora = tbMentoras.find((obj) => obj.id == mentoraId);

    if (mentora !== undefined) {
      return mentora;
    } else return `Mentora não encontrada.`;
  }

  verMentorasPorHabilidade(idHabilidade) {
    const mentoras = new Array();
    tbMentoras.forEach((obj) => {
      if (obj.habilidades.area.id == idHabilidade) {
        mentoras.push(obj);
      }
    });

    if (mentoras.length > 0) {
      return mentoras;
    } else return `Nenhuma mentora encontrada.`;
  }
}

module.exports = MentoraDados;
