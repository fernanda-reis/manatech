const tbAreas = [
  { id: 1, descricao: "Back-end" },
  { id: 2, descricao: "Front-end" },
  { id: 3, descricao: "Devops" },
  { id: 4, descricao: "QA" },
  { id: 5, descricao: "Empreendedorismo" },
];

const tbMentoras = [
  {
    id: 1,
    nome: "Fernanda",
    localizacao: "SP",
    habilidades: {
      area: { id: 2, descricao: "Front-end" },
      tecnologias: ["Javascript, css, html"],
    },
    bio: "Uma bio bem legal xxx",
    cargo: "Dev Junior",
    mentees: [],
  },
];

const tbMentees = [
  {
    id: 1,
    nome: "Julia",
    localizacao: "MG",
    habilidades: {
      area: { id: 2, descricao: "Back-end" },
      tecnologias: ["java", "mysql"],
    },
    mentoras: [],
  },
];

const tbPerfis = [];

module.exports = {
  tbMentoras,
  tbMentees,
  tbPerfis,
  tbAreas,
};
