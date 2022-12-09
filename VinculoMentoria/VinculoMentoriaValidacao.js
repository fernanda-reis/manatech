const Mentora = require("../Mentora/Mentora");
const Mentee = require("../Mentee/Mentee");

class VinculoMentoriaValidacao {
  validarVinculoMentoria(mentora, mentee) {
    if (typeof mentora == "object" && typeof mentee == "object") {
      if (!mentora.mentees.includes(mentee)) {
        return true;
      }
    }
    return false;
  }
}

module.exports = VinculoMentoriaValidacao;
