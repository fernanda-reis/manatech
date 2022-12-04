class VinculoMentoria {
  criarVinculoMentoria(mentoraId, mentoradaId) {
    const mentora = database.tbMentora.find((m) => m.id == mentoraId);
    const mentorada = database.tbMentorada.find((n) => n.id == mentoradaId);

    if (!mentora.mentoradas.includes(mentorada)) {
      mentora.mentoradas.push(mentorada);
      mentorada.mentoras.push(mentora);
      return `Vínculo de mentoria criado!`;
    } else return `Vínculo de mentoria já existe!`;
  }
}

module.exports = VinculoMentoria;
