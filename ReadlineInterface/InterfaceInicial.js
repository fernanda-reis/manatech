module.exports = { telaInicial, login, menuInicial };

const interface = require("./ReadlineInterface");
const cadastroDePerfil = require("./InterfaceDadosCadastro");
const alerta = require("./InterfaceAlertas");

let perfilLogado = require("../perfilLogado");

function telaInicial() {
  console.log("\n == Bem-Vinda ao ManaTech! == \n");
  interface.question(
    `O que deseja fazer? 
    1. Cadastro de Perfil 
    2. Login 
    0. Sair
    `,
    (input) => {
      switch (input) {
        case "0":
          encerrarInterface();
          break;
        case "1":
          cadastroDePerfil();
          break;
        case "2":
          login();
          break;
        default:
          alerta.alertaOpcaoInvalida();
          telaInicial();
          break;
      }
    }
  );
}

function login() {
  interface.question(
    `Digite o nome cadastrado ou 0 para voltar: \n`,
    (input) => {
      if (input == "0") {
        telaInicial();
      } else {
        perfilLogado = tbPerfis.find((obj) => {
          obj.nome == input;
        });
        if (perfilLogado) {
          menuInicial(perfilLogado);
        } else {
          alerta.alertaPerfilNaoEncontrado();
          login();
        }
      }
    }
  );
}

function menuInicial(perfilLogado) {
  interface.question(
    `Bem-vinda ${perfilLogado.nome}, o que deseja fazer? 
    1. Procurar nova mentora 
    2. Fazer uma postagem 
    3. Ver postagens 
    0. Sair
    `,
    (input) => {
      switch (input) {
        case "0":
          telaInicial();
          break;
        case "1":
          buscarMentora();
          menuInicial(perfilLogado);
          break;
        case "2":
          fazerPostagem();
          menuInicial(perfilLogado);
          break;
        case "3":
          verPostagens();
          menuInicial(perfilLogado);
          break;
        default:
          alerta.alertaOpcaoInvalida();
          menuInicial(perfilLogado);
          break;
      }
    }
  );
}

function encerrarInterface() {
  interface.close();
  console.log(`Programa encerrado. Até a próxima! :)`);
}
