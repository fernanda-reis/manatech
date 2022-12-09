const HabilidadeFormatacao = require("../Habilidade/HabilidadeFormatacao");

class MentoraFormatacao {
  #habilidadeFormatacao = new HabilidadeFormatacao();

  formataMentora(mentora) {
    const retorno =
      mentora.id +
      ". " +
      mentora.nome +
      " - " +
      mentora.cargo +
      " (" +
      mentora.localizacao +
      ")\n" +
      this.#habilidadeFormatacao.formataHabilidade(mentora.habilidades) +
      "\n" +
      mentora.bio +
      "\n" +
      "\n";

    return retorno;
  }
}

module.exports = MentoraFormatacao;
