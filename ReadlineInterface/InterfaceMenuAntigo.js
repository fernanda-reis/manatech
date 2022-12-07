const readline = require("readline");
const { tbMentoras, tbMentoradas, tbPerfis } = require("../database");
const Habilidade = require("../Habilidade/Habilidade");
const Mentora = require("../Mentora/Mentora");
const MentoraDados = require("../Mentora/MentoraDados");
const Mentorada = require("../Mentee/Mentee");
const VinculoMentoria = require("../Mentoria/VinculoMentoria");
const Perfil = require("../Perfil/Perfil");
const PerfilDbOperacoes = require("../Perfil/PerfilDbOperacoes");
const Postagem = require("../Postagem/Postagem");
const interface = readline.createInterface(process.stdin, process.stdout);

let perfilLogado = null;

function telaInicial() {
  interface.question(
    "Bem-Vinda ao ManaTech! O que deseja fazer? 1. Cadastro de Perfil 2. Login 0. Sair",
    (input) => {
      if (input == 1) {
        cadastroDePerfil();
      } else if (input == 2) {
        login();
      } else if (input == 0) {
        encerrar();
      } else {
        alertaOpcaoInvalida();
      }
    }
  );
}

function cadastroDePerfil() {
  interface.question(
    "Escolha um perfil: 1. Mentora 2. Mentorada 0. Voltar",
    (input) => {
      if (input == 1) {
        const dados = receberDadosMentora();
        perfilLogado = cadastrarPerfilMentora(dados);
        menuInicial(perfilLogado);
      } else if (input == 2) {
        const dados = receberDadosPerfil();
        perfilLogado = cadastrarPerfilMentorada(dados);
        menuInicial(perfilLogado);
      } else if (input == 0) {
        telaInicial();
      } else {
        this.alertaOpcaoInvalida();
      }
    }
  );
}

function cadastrarPerfilMentorada(dados) {
  const perfilOperacoes = new PerfilDbOperacoes();

  const { nome, localizacao, habilidades } = dados;
  const novoPerfil = new Mentorada(nome, localizacao, habilidades);
  return perfilOperacoes.salvarPerfil(novoPerfil, tbMentoradas);
}

function cadastrarPerfilMentora(dados) {
  const perfilOperacoes = new PerfilDbOperacoes();

  const { nome, localizacao, habilidades, cargo, bio } = dados;
  const novaMentora = new Mentora(nome, localizacao, habilidades, bio, cargo);
  return perfilOperacoes.salvarPerfil(novaMentora, tbMentoras);
}

function receberDadosMentora() {
  const dados = receberDadosPerfil();
  interface.question("Qual o seu cargo atual?", (cargo) => {
    dados.cargo = cargo;
    interface.question("Escreva uma breve bio: ", (bio) => {
      dados.bio = bio;
    });
  });
  return dados;
}

function receberDadosPerfil() {
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

function receberDadosHabilidades() {
  const dadosHabilidades = new Array();
  interface.question(
    "Quais as suas habilidades? 1. Back-end 2. Front-end 3. Devops",
    (habilidades) => {
      const listaInput = habilidades.split(",");

      listaInput.forEach((obj) => {
        let novaHabilidade = new Habilidade(obj);
        novaHabilidade.tecnologias.push(...receberDadosTecnologias());
        dadosHabilidades.push(novaHabilidade);
      });
    }
  );
  return dadosHabilidades;
}

function receberDadosTecnologias() {
  const tecnologias = new Array();
  interface.question(
    "Digite as tecnologias nas quais tem conhecimentos:",
    (tecnologias) => {
      const tecnologias = tecnologias.split(",");
    }
  );
  return tecnologias;
}

function login() {
  interface.question("Digite o nome cadastrado ou 0 para voltar: ", (input) => {
    if (input == 0) {
      telaInicial();
    } else {
      perfilLogado = tbPerfis.find((obj) => {
        obj.nome == input;
      });
      if (perfilLogado) {
        menuInicial(perfilLogado);
      } else alertaPerfilNaoEncontrado();
    }
  });
}

function menuInicial(perfil) {
  interface.question(
    "Bem-vinda <Nome>, o que deseja fazer? 1. Procurar nova mentora 2. Fazer uma postagem 3. Ver postagens 0. Sair",
    (input) => {
      if (input == 1) {
        buscarMentora();
      } else if (input == 2) {
        fazerPostagem();
      } else if (input == 3) {
        verPostagens();
      } else if (input == 0) {
        telaInicial();
      } else alertaOpcaoInvalida();
    }
  );
}

function verificarHabilidades() {
  interface.question(
    "Deseja mentoria em qual habilidade? 1. Front-end, 2. Back-end, 3. Devops",
    (input) => {
      if (input == 0) {
        menuInicial(perfilLogado);
      } else return input;
    }
  );
}

function escolherMentora(idHabilidade) {
  const mentoraDados = new MentoraDados();

  console.log(mentoraDados.verMentorasPorHabilidade(idHabilidade));

  interface.question("Digite o id da mentora ou 0 para voltar.", (input) => {
    if (input == 0) {
      menuInicial(perfilLogado);
    } else return input;
  });
}

function buscarMentora() {
  const idHabilidade = verificarHabilidades();
  const idMentoraEscolhida = escolherMentora(idHabilidade);

  const mentoraDados = new MentoraDados();

  console.log(mentoraDados.verMentoraPorId(idMentoraEscolhida));
  interface.question(
    "Digite S para escolher a mentora ou 0 para voltar.",
    (input) => {
      if (input == 0) {
        menuInicial(perfilLogado);
      }
      vincularMentoria(idMentoraEscolhida);
    }
  );
}

function vincularMentoria(idMentora) {
  const vinculoMentoria = new VinculoMentoria();
  console.log(vinculoMentoria.criarVinculoMentoria(idMentora, perfilLogado.id));
  menuInicial(perfilLogado);
}

function fazerPostagem() {
  const categoria = escolherCategoria();
  const dadosPostagem = escreverPostagem();
  const novaPostagem = new Postagem(perfilLogado);
}

function escolherCategoria() {
  interface.question(
    "Qual a categoria da postagem? 1.Desabfo 2.Duvidas 3.Geral",
    (input) => {
      if (input == 0) {
        menuInicial(perfilLogado);
      } else buscarCategoria(input);
    }
  );
}

// function buscarCategoria(idCategoria){
//     const
// }

function escreverPostagem() {
  interface.question("Escreva a postagem ou digite 0 para voltar.", (input) => {
    if (input == 0) {
      menuInicial(perfilLogado);
    } else return input;
  });
}

function verPostagens() {}

function alertaPerfilNaoEncontrado() {}

function alertaOpcaoInvalida() {}
