const { tbMentees } = require("../database");
const PerfilDbOperacoes = require("../Perfil/PerfilDbOperacoes");
const { novoId } = require("../Utils/Utils");
const MenteeValidacao = require("./MenteeValidacao");

class MenteeDbOperacoes extends PerfilDbOperacoes {
  #menteeValidacao = new MenteeValidacao();

  salvarPerfil(mentee) {
    const perfil = super.salvarPerfil(mentee);

    if (perfil && this.#menteeValidacao.validarMentee(mentee)) {
      mentee.id = novoId(tbMentees);
      tbMentees.push(mentee);
      return mentee;
    } else return `Mentee inválida.`;
  }
}

module.exports = MenteeDbOperacoes;
