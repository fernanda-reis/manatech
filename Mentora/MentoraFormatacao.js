class MentoraFormatacao {
  formataMentora(mentora) {
    return (
      mentora.id +
      ". " +
      mentora.nome +
      " - " +
      mentora.cargo +
      " (" +
      mentora.localizacao +
      ") " +
      " | " +
      "Habilidades: " +
      mentora.habilidades +
      "\n" +
      mentora.bio +
      "\n"
    );
  }
}

module.exports = MentoraFormatacao;
