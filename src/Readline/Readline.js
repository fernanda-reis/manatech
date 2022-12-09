const readline = require("readline-sync");
const AreaFormatacao = require("../Entidades/Area/AreaFormatacao");
const AreaDados = require("../Entidades/Area/AreaDados");
const Habilidade = require("../Entidades/Habilidade/Habilidade");
const Mentora = require("../Entidades/Mentora/Mentora");
const MentoraDados = require("../Entidades/Mentora/MentoraDados");
const MentoraFormatacao = require("../Entidades/Mentora/MentoraFormatacao");
const Mentee = require("../Entidades/Mentee/Mentee");
const MenteeDados = require("../Entidades/Mentee/MenteeDados");
const MenteeDbOperacoes = require("../Entidades/Mentee/MenteeDbOperacoes");
const MentoraDbOperacoes = require("../Entidades/Mentora/MentoraDbOperacoes");
const VinculoMentoria = require("../Entidades/VinculoMentoria/VinculoMentoria");

const vinculoMentoria = new VinculoMentoria();
const menteeDados = new MenteeDados();
const mentoraDados = new MentoraDados();
const mentoraFormator = new MentoraFormatacao();
const areaDados = new AreaDados();
const areasFormator = new AreaFormatacao();

let perfilLogado = null;

function telaInicial() {
  console.log("\n === Bem-Vinda ao ManaTech! === ");

  const input = readline.question(
    `
    == O que deseja fazer? 
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
}

function cadastroDePerfil() {
  const input = readline.question(
    `
    == Escolha um perfil: 
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

  const nome = readline.question("\n == Qual o seu nome: ");
  const localizacao = readline.question("\n == Onde voce reside? ");

  let areasDeInteresse = listarAreas();

  const area = readline.question(
    "\n == Qual a sua area de interesse? \n" + areasDeInteresse
  );

  const tecnologias = readline.question(
    "\n == Digite as tecnologias que tem conhecimento: "
  );

  let tecnologiasLista = tecnologias.split(",");

  const cargo = readline.question("\n == Qual o seu cargo atual? ");
  const bio = readline.question("\n == Escreva um poquinho sobre voce: ");

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

  const nome = readline.question("\n == Qual o seu nome? ");
  const localizacao = readline.question("\n == Onde voce reside? ");

  let areasDeInteresse = listarAreas();

  const area = readline.question(
    "\n == Qual a sua area de interesse? \n" + areasDeInteresse
  );

  const tecnologias = readline.question(
    "\n == Digite as tecnologias que deseja aprofundar: "
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
    `
    == Qual o seu perfil? 
    1. Mentora 
    2. Mentee
    `
  );

  const nome = readline.question(
    "\n == Digite seu nome cadastrado ou 0 para voltar: "
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
      console.log("\nOpção inválida!\n");
      telaInicial();
      break;
  }

  if (login) {
    perfilLogado = login;
    menuInicial();
  } else {
    console.log("\nPerfil não encontrado!\n");
    telaInicial();
  }
}

function menuInicial() {
  const input = readline.question(
    `
    Bem-vinda ${perfilLogado.nome}! O que deseja fazer? 
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
      fazerPostagem();
      menuInicial();
      break;
    case "3":
      fazerPostagem();
      menuInicial();
      break;
    default:
      console.log("\nOpção inválida!\n");
      menuInicial();
      break;
  }
}

function buscarMentora() {
  let areasDeInteresse = listarAreas();
  let retornoMentoras = "\n";
  const input = readline.question(
    "\n " +
      "== Escolha uma area de interesse: \n" +
      "0. Todas \n" +
      areasDeInteresse
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
    "\n == Escolha uma mentora ou 0 para voltar: \n" + mentoras
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
    console.log("\n" + resultado + "\n");
    buscarMentora();
  } else {
    console.log("\n" + resultado + "\n");
    reiniciar();
  }
}

function fazerPostagem() {
  const input = readline.question(
    `
    == Escolha uma categoria de postagem: 
    1. Geral
    2. Eventos
    3. Duvidas
    4. Desabafos
    0. Voltar
    `
  );

  if (input == "0") {
    menuInicial();
  } else {
    console.log("\n Em construção! Volte mais tarde. \n");
    menuInicial();
  }
}

function reiniciar() {
  const input = readline.question("\n == Digite 0 para voltar ao menu.\n");
  if (input == "0") {
    menuInicial();
  } else {
    console.log("\n Não tem mais nada aqui, mana \n ");
    reiniciar();
  }
}

module.exports = telaInicial;
