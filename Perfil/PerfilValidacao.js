const Perfil = require("./Perfil");

class PerfilValidacao {
  validarPerfil(perfil) {
    if (perfil instanceof Perfil) {
      return true;
    } else return false;
  }
}

module.exports = PerfilValidacao;
