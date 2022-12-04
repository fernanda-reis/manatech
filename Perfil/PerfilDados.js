class PerfilDados {
  verPerfis(listaPerfil) {
    return listaPerfil;
  }

  verPerfilPorId(perfilId, listaPerfil) {
    const perfil = listaPerfil.filter((obj) => {
      obj.id == perfilId;
    });

    return perfil[0];
  }
}

module.exports = PerfilDados;
