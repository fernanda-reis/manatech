const readline = require("readline");
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
        encerrarInterface();
      } else {
        alertaOpcaoInvalida();
      }
    }
  );
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

function menuInicial(perfilLogado) {
  interface.question(
    `Bem-vinda ${perfilLogado.nome}, o que deseja fazer? 1. Procurar nova mentora 2. Fazer uma postagem 3. Ver postagens 0. Sair`,
    (input) => {
      if (input == 1) {
        buscarMentora();
        menuInicial(perfilLogado);
      } else if (input == 2) {
        fazerPostagem();
        menuInicial(perfilLogado);
      } else if (input == 3) {
        verPostagens();
        menuInicial(perfilLogado);
      } else if (input == 0) {
        telaInicial();
      } else alertaOpcaoInvalida();
    }
  );
}
