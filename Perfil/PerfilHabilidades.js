const Habilidade = require("../Habilidade/Habilidade");
const PerfilUtils = require("./PerfilUtils");

class PerfilHabilidades extends PerfilUtils {
  constructor(perfil) {
    super(perfil);
  }

  atualizarHabilidades(habilidade, tecnologias) {
    const perfilHabilidades = this.perfil.habilidades;

    if (perfilHabilidades.includes((obj) => obj.descricao == habilidade)) {
      const index = perfilHabilidades.findIndex(
        (obj) => obj.descricao == habilidade
      );

      this.perfil.habilidades[index].tecnologias.push(...tecnologias);
    } else {
      const novaHabilidade = new Habilidade();
      novaHabilidade.tecnologias.push(...tecnologias);

      this.perfil.habilidades.push(novaHabilidade);
    }
  }
}

module.exports = PerfilHabilidades;
