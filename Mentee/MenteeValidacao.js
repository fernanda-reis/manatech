const PerfilValidacao = require("../Perfil/PerfilValidacao");
const Mentee = require("./Mentee");

class MenteeValidacao extends PerfilValidacao {
  validarMentee(mentee) {
    const perfil = super.validarPerfil(mentee);

    if (mentee instanceof Mentee && perfil) {
      return true;
    } else return false;
  }
}

module.exports = MenteeValidacao;
