const { tbMentees, tbPerfis } = require("../database");
const Mentee = require("../Mentee/Mentee");
const MenteeDados = require("../Mentee/MenteeDados");
const Habilidade = require("../Habilidade/Habilidade");
const MenteeDbOperacoes = require("../Mentee/MenteeDbOperacoes");

describe("Teste da classe Mentee", () => {
  const area = { id: 1, descricao: "Back-end" };
  const tecnologias = ["java", "sql"];
  const habilidade = new Habilidade(area, tecnologias);
  test("Deve ciar instância de mentee corretamente", () => {
    const mentee = new Mentee("Ana", "SP", habilidade);

    expect(mentee).toBeInstanceOf(Mentee);
  });

  test("Deve salvar mentee no database", () => {
    const mentee = new Mentee("Ana", "SP", habilidade);

    const menteeOperacoes = new MenteeDbOperacoes();
    const resultado = menteeOperacoes.salvarPerfil(mentee);

    expect(resultado instanceof Mentee).toBeTruthy();
    expect(tbMentees).toContainEqual(resultado);
    expect(tbPerfis).toContainEqual(resultado);
  });

  test("Deve retornar aviso de perfil inválido e não salvar no database", () => {
    const menteeOperacoes = new MenteeDbOperacoes();
    const resultado = menteeOperacoes.salvarPerfil("mentee");

    expect(resultado instanceof Mentee).toBeFalsy();
    expect(resultado).toEqual("Mentee inválida.");
    expect(tbMentees).not.toContainEqual(resultado);
  });

  test("Deve retornar os dados da mentee com o id buscado", () => {
    const menteeDados = new MenteeDados();
    const id = 1;
    const resultado = menteeDados.verPerfilPorId(id);
    expect(typeof resultado).toEqual("object");
    expect(resultado.id).toEqual(id);
  });

  test("Deve retornar aviso de perfil não encontrado ao buscar id inválido", () => {
    const menteeDados = new MenteeDados();
    const resultado = menteeDados.verPerfilPorId("a");

    expect(resultado).toEqual(`Mentee não encontrada.`);
  });

  test("Deve retornar valores do database", () => {
    const menteeDados = new MenteeDados();
    const resultado = menteeDados.verPerfis();

    expect(resultado).toEqual(tbMentees);
  });
});
