const readline = require("readline");
const interface = readline.createInterface(process.stdin, process.stdout);

function cadastroDePerfil() {
  let dados;
  let retorno;

  interface.question(
    "Escolha um perfil: 1. Mentora 2. Mentee 0. Voltar",
    (input) => {
      if (input == 1) {
        dados = receberDadosMentora();
        retorno = cadastrarMentora(dados);

        if (retorno instanceof Mentora) {
          perfilLogado = retorno;
          menuInicial(perfilLogado);
        } else alertaErro(perfilLogado);
      } else if (input == 2) {
        dados = receberDadosMentee();
        retorno = cadastrarMentee(dados);

        if (retorno instanceof Mentee) {
          perfilLogado = retorno;
          menuInicial(perfilLogado);
        } else alertaErro(perfilLogado);
      } else if (input == 0) {
        telaInicial();
      } else {
        this.alertaOpcaoInvalida();
      }
    }
  );
}

function receberDadosMentee() {
  const dados = {};
  interface.question("Como prefere ser chamada?", (nome) => {
    dados.nome = nome;
    interface.question("Onde você mora? (Cidade, Estado)", (localizacao) => {
      dados.localizacao = localizacao;
      dados.habilidades = receberDadosHabilidades();
    });
  });
  return dados;
}

function receberDadosMentora() {
  const dados = receberDadosMentee();
  interface.question("Qual o seu cargo atual?", (cargo) => {
    dados.cargo = cargo;
    interface.question("Escreva uma breve bio: ", (bio) => {
      dados.bio = bio;
    });
  });
  return dados;
}

function receberDadosHabilidades() {
  const dados = new Array();
  interface.question(
    "Quais as suas habilidades? 1. Back-end 2. Front-end 3. Devops",
    (habilidades) => {
      let novaHabilidade = null;
      const listaInput = habilidades.split(",");

      for (let habilidade in listaInput) {
        const tecnologias = receberDadosTecnologias(habilidade);
        novaHabilidade = new Habilidade(habilidade);
        novaHabilidade.tecnologias.push(...tecnologias);
        dados.push(novaHabilidade);
      }
    }
  );
  return dados;
}

function receberDadosTecnologias(habilidade) {
  const dados = new Array();
  interface.question(
    `Digite as tecnologias nas quais tem conhecimentos em ${habilidade}:`,
    (input) => {
      const listaInput = input.split(",");
      for (let item in listaInput) {
        dados.push(item);
      }
    }
  );
  return dados;
}

module.exports = cadastroDePerfil;
