const tbAreas = [
  { id: 1, descricao: "Back-end" },
  { id: 2, descricao: "Front-end" },
  { id: 3, descricao: "Devops" },
  { id: 4, descricao: "Gestao de TI" },
  { id: 5, descricao: "Empreendedorismo" },
];

const tbMentoras = [
  {
    id: 1,
    nome: "Ana",
    localizacao: "SP",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["java, springboot"],
    },
    bio: "Oi! Sou a ana :) Gosto de codigo&chocolate.",
    cargo: "Dev Junior",
    mentees: [],
  },
  {
    id: 2,
    nome: "Catarina",
    localizacao: "RJ",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["c#, aspnet"],
    },
    bio: "Eu acredito em fadas. Acredito. Acredito.",
    cargo: "Dev Sr",
    mentees: [],
  },
  {
    id: 3,
    nome: "Leandra",
    localizacao: "PA",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["python, django"],
    },
    bio: "Constantemente ensinando e aprendendo.",
    cargo: "Engenheira de Software",
    mentees: [],
  },
  {
    id: 4,
    nome: "Bia",
    localizacao: "RS",
    habilidades: {
      area: { id: 2, descricao: "Front-end" },
      tecnologias: ["react, html, css, javascript"],
    },
    bio: "baby shark. turururu",
    cargo: "Tech Leader",
    mentees: [],
  },
];

const tbMentees = [
  {
    id: 1,
    nome: "Julia",
    localizacao: "MG",
    habilidades: {
      area: { id: 2, descricao: "Front-end" },
      tecnologias: ["css, html, javascript"],
    },
    mentoras: [],
  },
];

const tbPerfis = [
  {
    id: 1,
    nome: "Ana",
    localizacao: "SP",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["java, springboot"],
    },
    bio: "Oi! Sou a ana :) Gosto de codigo&chocolate.",
    cargo: "Dev Junior",
    mentees: [],
  },
  {
    id: 2,
    nome: "Catarina",
    localizacao: "RJ",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["c#, aspnet"],
    },
    bio: "Eu acredito em fadas. Acredito. Acredito.",
    cargo: "Dev Sr",
    mentees: [],
  },
  {
    id: 3,
    nome: "Leandra",
    localizacao: "PA",
    habilidades: {
      area: { id: 1, descricao: "Back-end" },
      tecnologias: ["python, django"],
    },
    bio: "Constantemente ensinando e aprendendo.",
    cargo: "Engenheira de Software",
    mentees: [],
  },
  {
    id: 4,
    nome: "Bia",
    localizacao: "RS",
    habilidades: {
      area: { id: 2, descricao: "Front-end" },
      tecnologias: ["react, html, css, javascript"],
    },
    bio: "baby shark. turururu",
    cargo: "Tech Leader",
    mentees: [],
  },
  {
    id: 5,
    nome: "Julia",
    localizacao: "MG",
    habilidades: {
      area: { id: 2, descricao: "Front-end" },
      tecnologias: ["css, html, javascript"],
    },
    mentoras: [],
  },
];

module.exports = {
  tbMentoras,
  tbMentees,
  tbPerfis,
  tbAreas,
};
