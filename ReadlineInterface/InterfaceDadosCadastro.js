const interface = require("./ReadlineInterface");

const Mentora = require("../Mentora/Mentora");
const Mentee = require("../Mentee/Mentee");
const HabilidadeDados = require("../Habilidade/HabilidadeDados");
const Habilidade = require("../Habilidade/Habilidade");
const formataHabilidades = require("./InterfaceTextoFormatacao");

const cadastrarPerfil = require("./InterafaceDbOperacoes");
const interfaceInicial = require("./InterfaceInicial");
const alerta = require("./InterfaceAlertas");
const util = require("util");
const question = util.promisify(interface.question).bind(interface);

let { perfilLogado } = require("../perfilLogado");

function cadastroDePerfil() {
  let dados;
  let retorno;

  interface.question(
    `Escolha um perfil: 
    1. Mentora 
    2. Mentee 
    0. Voltar
    `,
    (input) => {
      switch (input) {
        case "0":
          interfaceInicial.telaInicial();
          break;
        case "1":
          retorno = cadastrarPerfil.cadastrarMentora(receberDadosMentora());
          if (retorno instanceof Mentora) {
            perfilLogado = retorno;
            interfaceInicial.menuInicial(perfilLogado);
          } else alerta.alertaErro();
          break;
        case "2":
          retorno = cadastrarPerfil.cadastrarMentee(receberDadosMentee());
          if (retorno instanceof Mentee) {
            perfilLogado = retorno;
            interfaceInicial.menuInicial(perfilLogado);
          } else alerta.alertaErro();
          break;
        default:
          alerta.alertaOpcaoInvalida();
          interfaceInicial.telaInicial();
          break;
      }
    }
  );
}

function receberDadosMentee() {
  const dados = {};
  console.log("== Cadastro de Perfil ==");
  interface.question("Como prefere ser chamada?", (nome) => {
    dados.nome = nome;
    interface.question("Onde você mora? (Cidade, Estado) \n", (localizacao) => {
      dados.localizacao = localizacao;
      dados.habilidades = receberDadosHabilidades();
    });
  });
  return dados;
}

function receberDadosMentora() {
  const dados = receberDadosMentee();
  interface.question("Qual o seu cargo atual? \n", (cargo) => {
    dados.cargo = cargo;
    interface.question("Escreva uma breve bio: \n", (bio) => {
      dados.bio = bio;
    });
  });
  return dados;
}

function receberDadosHabilidades() {
  const dados = new Array();
  const textoHabilidades = formataHabilidades();

  interface.question(
    "Qual a sua habilidade? \n" + textoHabilidades,
    (input) => {
      const habilidadeDados = new HabilidadeDados();
      const habilidade = habilidadeDados.buscarHabilidadePorId(input);
      const tecnologias = receberDadosTecnologias(habilidade.descricao);
      console.log("tecnologias " + tecnologias);
      dados.push(cadastrarHabilidade(habilidade.descricao, tecnologias));
      return dados;
    }
  );
}

function receberDadosTecnologias(habilidade) {
  const dados = new Array();

  interface.question(
    `Digite as tecnologias nas quais tem conhecimentos em ${habilidade}: \n`,
    (input) => {
      const listaInput = input.split(",");
      console.log(listaInput);
      listaInput.forEach((item) => {
        dados.push(item);
      });

      console.log("return dados " + dados);
      return dados;
    }
  );
}

function cadastrarHabilidade(descricao, tecnologias = []) {
  let novaHabilidade = new Habilidade(descricao);

  tecnologias.forEach((e) => {
    novaHabilidade.tecnologias.push(e);
  });

  return novaHabilidade;
}

module.exports = cadastroDePerfil;
