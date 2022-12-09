const readline = require("readline-sync");
const AreaFormatacao = require("../Area/AreaFormatacao");
const AreaDados = require("../Area/AreaDados");
const Habilidade = require("../Habilidade/Habilidade");
const Mentora = require("../Mentora/Mentora");
const MentoraDados = require("../Mentora/MentoraDados");
const MentoraFormatacao = require("../Mentora/MentoraFormatacao");
const Mentee = require("../Mentee/Mentee");
const MenteeDados = require("../Mentee/MenteeDados");
const MenteeDbOperacoes = require("../Mentee/MenteeDbOperacoes");
const MentoraDbOperacoes = require("../Mentora/MentoraDbOperacoes");
const VinculoMentoria = require("../VinculoMentoria/VinculoMentoria");

const vinculoMentoria = new VinculoMentoria();
const menteeDados = new MenteeDados();
const mentoraDados = new MentoraDados();
const mentoraFormator = new MentoraFormatacao();
const areaDados = new AreaDados();
const areasFormator = new AreaFormatacao();

let perfilLogado = null;

function telaInicial() {
  console.log("\n == Bem-Vinda ao ManaTech! == \n");
  let retorno;

  const input = readline.question(
    `O que deseja fazer? 
    1. Cadastro de Perfil 
    2. Login 
    `
  );

  switch (input) {
    case "1":
      cadastroDePerfil();
      break;
    case "2":
      login();
      break;
    default:
      console.log("Opção inválida!");
      telaInicial();
      break;
  }

  console.log(retorno);
}

function cadastroDePerfil() {
  const input = readline.question(
    `\nEscolha um perfil: 
    1. Mentora 
    2. Mentee 
    0. Voltar
    `
  );

  switch (input) {
    case "0":
      telaInicial();
      break;
    case "1":
      cadastrarPerfilMentora();
      break;
    case "2":
      cadastrarPerfilMentee();
      break;
    default:
      console.log("Opção inválida!");
      telaInicial();
      break;
  }
}

function cadastrarPerfilMentora() {
  let dadosMentora;

  const nome = readline.question(`Qual o seu nome? `);
  const localizacao = readline.question(`Onde voce reside? `);

  let areasDeInteresse = listarAreas();

  const area = readline.question(
    "\nQual sua area de interesse? \n" + areasDeInteresse
  );

  const tecnologias = readline.question(
    `Digite as tecnologias que tem conhecimento: `
  );

  let tecnologiasLista = tecnologias.split(",");

  const cargo = readline.question(`Qual o seu cargo atual? `);
  const bio = readline.question(`Escreva um pouquinho sobre voce: `);

  let habilidade = new Habilidade(area, tecnologiasLista);
  dadosMentora = new Mentora(nome, localizacao, habilidade, bio, cargo);

  const mentoraOperacoes = new MentoraDbOperacoes();
  let retorno = mentoraOperacoes.salvarPerfil(dadosMentora);

  if (retorno instanceof Mentora) {
    perfilLogado = retorno;
    menuInicial();
  } else {
    console.log(retorno);
    cadastroDePerfil();
  }
}

function cadastrarPerfilMentee() {
  let dadosMentee;

  const nome = readline.question(`Qual o seu nome? `);
  const localizacao = readline.question(`Onde voce reside? `);

  let areasDeInteresse = listarAreas();

  const area = readline.question(
    "\nQual sua area de interesse? \n" + areasDeInteresse
  );

  const tecnologias = readline.question(
    `Digite as tecnologias que deseja aprofundar: `
  );

  let tecnologiasLista = tecnologias.split(",");

  let habilidade = new Habilidade(area, tecnologiasLista);
  dadosMentee = new Mentee(nome, localizacao, habilidade);

  const menteeOperacoes = new MenteeDbOperacoes();
  let retorno = menteeOperacoes.salvarPerfil(dadosMentee);

  if (retorno instanceof Mentee) {
    perfilLogado = retorno;
    menuInicial();
  } else {
    console.log(retorno);
    cadastroDePerfil();
  }
}

function listarAreas() {
  let areasDeInteresse = "";

  areaDados.listarAreas().forEach((a) => {
    areasDeInteresse += areasFormator.formataArea(a);
  });

  return areasDeInteresse;
}

function login() {
  const perfil = readline.question(
    `\nQual o seu perfil? 
    1. Mentora 
    2. Mentee
    `
  );

  const nome = readline.question(
    `Digite seu nome cadastrado ou 0 para voltar: `
  );

  let login = null;

  switch (perfil) {
    case "1":
      mentoraDados.verPerfis().forEach((perfil) => {
        if (perfil.nome == nome) {
          login = perfil;
        }
      });

      break;
    case "2":
      menteeDados.verPerfis().forEach((perfil) => {
        if (perfil.nome == nome) {
          login = perfil;
        }
      });
      break;
    default:
      console.log("Opção inválida!");
      telaInicial();
      break;
  }

  if (login) {
    perfilLogado = login;
    menuInicial();
  } else {
    console.log("Perfil não encontrado.");
    telaInicial();
  }
}

function menuInicial() {
  const input = readline.question(
    `\nBem-vinda ${perfilLogado.nome}! O que deseja fazer? 
    1. Procurar nova mentora 
    2. Fazer uma postagem 
    3. Ver postagens 
    0. Sair
    `
  );

  switch (input) {
    case "0":
      telaInicial();
      break;
    case "1":
      buscarMentora();
      break;
    case "2":
      //fazerPostagem();
      menuInicial();
      break;
    case "3":
      //verPostagens();
      menuInicial();
      break;
    default:
      console.log("Opção inválida!");
      menuInicial();
      break;
  }
}

function buscarMentora() {
  let areasDeInteresse = listarAreas();
  let retornoMentoras = "\n";
  const input = readline.question(
    "\n Escolha uma area de interesse: \n0. Todas\n" + areasDeInteresse
  );

  if (input == "0") {
    let listaMentoras = mentoraDados.verPerfis();

    listaMentoras.forEach((m) => {
      retornoMentoras += mentoraFormator.formataMentora(m);
    });

    exibirMentoras(retornoMentoras);
  } else {
    let listaMentoras = mentoraDados.verMentorasPorHabilidade(input);

    if (!Array.isArray(listaMentoras)) {
      console.log(listaMentoras);
      buscarMentora();
    } else {
      listaMentoras.forEach((m) => {
        retornoMentoras += mentoraFormator.formataMentora(m);
      });
      exibirMentoras(retornoMentoras);
    }
  }
}

function exibirMentoras(mentoras) {
  const input = readline.question(
    "\n Escolha uma mentora ou 0 para voltar: \n" + mentoras
  );

  if (input == "0") {
    menuInicial();
  } else {
    criarVinculo(input);
  }
}

function criarVinculo(idMentora) {
  let resultado = vinculoMentoria.criarVinculoMentoria(
    idMentora,
    perfilLogado.id
  );

  if (resultado == "Vínculo de mentoria inválido.") {
    console.log(resultado);
    buscarMentora();
  } else {
    console.log(resultado);
    reiniciar();
  }
}

function reiniciar() {
  const input = readline.question("Digite 0 para voltar ao menu.");
  if (input == "0") {
    menuInicial();
  } else {
    console.log("Não tem mais nada aqui, mana");
    reiniciar();
  }
}

module.exports = telaInicial;
