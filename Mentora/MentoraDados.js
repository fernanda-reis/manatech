const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentoras } = require("../database");

class MentoraDados extends PerfilDados {
  verPerfis(tbMentoras) {
    let mentoras = "";
    tbMentoras.map((obj) => {
      mentoras += this.formataMentora(obj);
    });
    return mentoras;
  }

  verMentoraPorId(perfilId, listaPerfil) {
    const mentora = super.verPerfilPorId(perfilId, listaPerfil);
    return this.formataMentora(mentora);
  }

  formataMentora(mentora) {
    return (
      mentora.id +
      ". " +
      mentora.nome +
      " - " +
      mentora.cargo +
      " (" +
      mentora.localizacao +
      ") " +
      " | " +
      "Habilidades: " +
      mentora.habilidades +
      "\n" +
      mentora.bio +
      "\n"
    );
  }
}

module.exports = MentoraDados;
