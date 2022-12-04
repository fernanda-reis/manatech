const VinculoMentoriaValidacao = require("./VinculoMentoriaValidacao");
const { tbMentee, tbMentoras } = require("../database");

class VinculoMentoria {
  #vinculoMentoriaValidacao = new VinculoMentoriaValidacao();

  criarVinculoMentoria(idMentora, idMentee) {
    const mentora = tbMentoras.find((m) => m.id == idMentora);
    const mentee = tbMentee.find((n) => n.id == idMentee);

    if (
      this.#vinculoMentoriaValidacao.validarVinculoMentoria(mentora, mentee)
    ) {
      mentora.mentees.push(mentee);
      mentee.mentoras.push(mentora);
      return `Vínculo de mentoria criado!`;
    } else return `Vínculo não criado.`;
  }
}

module.exports = VinculoMentoria;
