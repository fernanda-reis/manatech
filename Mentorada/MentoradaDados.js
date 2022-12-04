const PerfilDados = require("../Perfil/PerfilDados");
const { tbMentoradas } = require("../database");

class MentoradaDados extends PerfilDados {
  verPerfis(tbMentoradas) {
    let mentoradas = "";
    tbMentoradas.map((obj) => {
      mentoradas += this.formataMentorada(obj);
    });
    return mentoradas;
  }

  verMentoradaPorId(perfilId, listaPerfil) {
    const mentorada = super.verPerfilPorId(perfilId, listaPerfil);
    return this.formataMentorada(mentorada);
  }

  formataMentorada(mentorada) {
    return (
      mentorada.id +
      ". " +
      mentorada.nome +
      "(" +
      mentorada.localizacao +
      ")" +
      " | " +
      "Habilidades: " +
      mentorada.habilidades +
      "\n"
    );
  }
}

module.exports = MentoradaDados;
