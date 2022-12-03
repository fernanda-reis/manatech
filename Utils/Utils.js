function formataData(date) {
  let dataFormatada = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`;
  return dataFormatada;
}

function novoId(lista) {
  let id = lista.length++;
  return id;
}

module.exports = { formataData, novoId };
