const PerfilValidacao = require("../Perfil/PerfilValidacao");
const Mentora = require("./Mentora");

class MentoraValidacao extends PerfilValidacao {
  validarMentora(mentora) {
    const perfil = super.validarPerfil(mentora);

    if (mentora instanceof Mentora && perfil) {
      return true;
    } else return false;
  }
}

module.exports = MentoraValidacao;
