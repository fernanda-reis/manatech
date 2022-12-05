const Habilidade = require("../Habilidade/Habilidade");
const Perfil = require("./Perfil");

class PerfilValidacao {
  validarPerfil(perfil) {
    if (perfil instanceof Perfil && perfil.habilidades instanceof Habilidade) {
      if (perfil.nome.length > 0 && perfil.localizacao.length > 0) {
        return true;
      }
    } else return false;
  }
}

module.exports = PerfilValidacao;
