const Mentora = require("../Mentora/Mentora");
const Mentee = require("../Mentee/Mentee");

class VinculoMentoriaValidacao {
  validarVinculoMentoria(mentora, mentee) {
    if (mentora instanceof Mentora && mentee instanceof Mentee) {
      if (!mentora.mentees.includes(mentee)) {
        return true;
      }
      console.log("Vínculo de mentoria já existe!");
    }
    console.log("Dados de mentoria inválidos.");
    return false;
  }
}

module.exports = VinculoMentoriaValidacao;
