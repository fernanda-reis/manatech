const HabilidadeFormatacao = require("../Habilidade/HabilidadeFormatacao");

class MenteeFormatacao {
  #habilidadeFormatacao = new HabilidadeFormatacao();

  formataMentee(mentee) {
    const retorno =
      mentee.id +
      ". " +
      mentee.nome +
      "(" +
      mentee.localizacao +
      ")\n" +
      this.#habilidadeFormatacao.formataHabilidade(mentee.habilidades) +
      "\n" +
      "\n";

    return retorno;
  }
}

module.exports = MenteeFormatacao;
