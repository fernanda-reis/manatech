class MenteeFormatacao {
  formataMentee(mentee) {
    return (
      mentee.id +
      ". " +
      mentee.nome +
      "(" +
      mentee.localizacao +
      ")" +
      " | " +
      "Habilidades: " +
      mentee.habilidades +
      "\n"
    );
  }
}

module.exports = MenteeFormatacao;
