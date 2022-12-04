const Categoria = require("./Categoria/Categoria");
const Habilidade = require("./Habilidade/Habilidade");
const Mentora = require("./Mentora/Mentora");

const tbHabilidades = [
  new Habilidade("1", "Back-end"),
  new Habilidade("2", "Front-end"),
  new Habilidade("3", "SQL"),
  new Habilidade("4", "Devops"),
  new Habilidade("5", "Empreendedorismo"),
  new Habilidade("6", "Gestão de TI"),
];

const tbCategorias = [
  new Categoria("1", "Dúvidas"),
  new Categoria("2", "Desabafos"),
  new Categoria("3", "Eventos"),
  new Categoria("4", "Geral"),
];

const tbPostagens = new Array();

const tbMentoras = new Array();

const tbMentee = new Array();

const tbPerfis = [
  {
    id: 1,
    nome: "Fernanda",
    localizacao: "SP",
    habilidades: {
      descricao: "Front-end",
      tecnologias: ["Javascript, css, html"],
    },
  },
];

module.exports = {
  tbCategorias,
  tbPostagens,
  tbMentoras,
  tbMentee,
  tbPerfis,
  tbHabilidades,
};
