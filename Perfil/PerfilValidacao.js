const Habilidade = require("../Habilidade/Habilidade");
const Perfil = require("./Perfil");

class PerfilValidacao {
  validarPerfil(perfil) {
    if (perfil instanceof Perfil && perfil.habilidades instanceof Habilidade) {
      return true;
    } else return false;
  }
}

module.exports = PerfilValidacao;
