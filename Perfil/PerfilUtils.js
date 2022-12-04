const Perfil = require("./Perfil");

class PerfilUtils {
  perfil;

  constructor(perfil) {
    if (perfil instanceof Perfil) {
      this.perfil = perfil;
    }
  }
}

module.exports = PerfilUtils;
