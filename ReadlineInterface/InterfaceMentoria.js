const readline = require("readline");
const interface = readline.createInterface(process.stdin, process.stdout);

function buscarMentora() {
  const idHabilidade = escolherHabilidade();
  const idMentoraEscolhida = escolherMentora(idHabilidade);
  apresentarMentoraEscolhida(idMentoraEscolhida);

  interface.question(
    "Digite S para confirmar a mentora ou 0 para voltar.",
    (input) => {
      if (input == 0) {
        menuInicial(perfilLogado);
      } else if (input == "S") {
        vincularMentoria(idMentoraEscolhida, perfilLogado.id);
      } else alertaOpcaoInvalida();
    }
  );
}

function escolherHabilidade() {
  let idHabilidade;

  interface.question(
    "Deseja mentoria em qual habilidade? (escolha apenas uma) 1. Front-end, 2. Back-end, 3. Devops",
    (input) => {
      idHabilidade = input;
    }
  );

  return idHabilidade;
}

function escolherMentora(idHabilidade) {
  apresentarMentoras(idHabilidade);

  return interface.question(
    "Digite o id da mentora escolhida ou 0 para voltar.",
    (input) => {
      if (input == 0) {
        menuInicial(perfilLogado);
      } else return input;
    }
  );
}

function apresentarMentoras(idHabilidade) {
  const mentoraDados = new MentoraDados();
  const mentoraFormata = new MentoraFormatacao();

  const mentorasPorHabilidade =
    mentoraDados.verMentorasPorHabilidade(idHabilidade);

  const mentorasFormatado = mentorasPorHabilidade.map((m) =>
    mentoraFormata.formataMentora(m)
  );

  console.log("Essas são as mentoras com a habilidade escolhida: ");
  console.log(mentorasFormatado);
}

function apresentarMentoraEscolhida(idMentora) {
  const mentoraDados = new MentoraDados();
  const mentoraFormata = new MentoraFormatacao();

  const mentoraEscolhida = mentoraDados.verMentoraPorId(idMentora);
  const mentoraFormatado = mentoraFormata.formataMentora(mentoraEscolhida);

  console.log("Essa é a mentora escolhida: ");
  console.log(mentoraFormatado);
}

module.exports = buscarMentora;
