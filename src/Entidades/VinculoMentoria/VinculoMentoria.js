const VinculoMentoriaValidacao = require("../VinculoMentoria/VinculoMentoriaValidacao");
const { tbMentees, tbMentoras } = require("../../../database");

class VinculoMentoria {
  #vinculoMentoriaValidacao = new VinculoMentoriaValidacao();

  criarVinculoMentoria(idMentora, idMentee) {
    const mentora = tbMentoras.find((m) => m.id == idMentora);
    const mentee = tbMentees.find((n) => n.id == idMentee);

    if (
      this.#vinculoMentoriaValidacao.validarVinculoMentoria(mentora, mentee)
    ) {
      mentora.mentees.push(mentee);
      mentee.mentoras.push(mentora);
      return `Vínculo de mentoria criado com sucesso!`;
    } else return `Vínculo de mentoria inválido.`;
  }
}

module.exports = VinculoMentoria;
