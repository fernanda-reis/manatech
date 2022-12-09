const { tbMentoras } = require("../database");
const PerfilDbOperacoes = require("../Perfil/PerfilDbOperacoes");
const { novoId } = require("../Utils/Utils");
const MentoraValidacao = require("./MentoraValidacao");

class MentoraDbOperacoes extends PerfilDbOperacoes {
  #mentoraValidacao = new MentoraValidacao();

  salvarPerfil(mentora) {
    const perfil = super.salvarPerfil(mentora);

    if (perfil && this.#mentoraValidacao.validarMentora(mentora)) {
      mentora.id = novoId(tbMentoras);
      tbMentoras.push(mentora);
      return mentora;
    } else return `Mentora inválida.`;
  }
}

module.exports = MentoraDbOperacoes;
