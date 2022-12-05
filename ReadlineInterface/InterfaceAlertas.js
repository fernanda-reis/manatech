const readline = require("readline");
const interface = readline.createInterface(process.stdin, process.stdout);

function alertaErro() {}

function alertaOpcaoInvalida() {}

function alertaPerfilNaoEncontrado() {}

module.exports = { alertaErro, alertaOpcaoInvalida, alertaPerfilNaoEncontrado };
