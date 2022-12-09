function formataData() {
  const dataAtual = new Date();
  const dataFormatada = `${dataAtual.getHours()}:${dataAtual.getMinutes()}:${dataAtual.getSeconds()}`;
  return dataFormatada;
}

function novoId(lista) {
  let id = lista.length + 1;
  return id;
}

module.exports = { formataData, novoId };
