const { tbMentoras, tbPerfis } = require("../database");
const Mentora = require("../Mentora/Mentora");
const MentoraDados = require("../Mentora/MentoraDados");
const Habilidade = require("../Habilidade/Habilidade");
const MentoraDbOperacoes = require("../Mentora/MentoraDbOperacoes");

describe("Teste da classe Mentora", () => {
  const area = { id: 1, descricao: "Back-end" };
  const tecnologias = ["java", "sql"];
  const habilidade = new Habilidade(area, tecnologias);
  test("Deve ciar instância de mentora corretamente", () => {
    const mentora = new Mentora(
      "Ana",
      "SP",
      habilidade,
      "Uma bio bem legal.",
      "Engenheira de Software"
    );

    expect(mentora).toBeInstanceOf(Mentora);
  });

  test("Deve salvar mentora no database", () => {
    const mentora = new Mentora(
      "Ana",
      "SP",
      habilidade,
      "Uma bio bem legal.",
      "Engenheira de Software"
    );

    const mentoraOperacoes = new MentoraDbOperacoes();
    const resultado = mentoraOperacoes.salvarPerfil(mentora);

    expect(resultado instanceof Mentora).toBeTruthy();
    expect(tbMentoras).toContainEqual(resultado);
    expect(tbPerfis).toContainEqual(resultado);
  });

  test("Deve retornar aviso de perfil inválido e não salvar no database", () => {
    const mentoraOperacoes = new MentoraDbOperacoes();
    const resultado = mentoraOperacoes.salvarPerfil("mentora");

    expect(resultado instanceof Mentora).toBeFalsy();
    expect(resultado).toEqual("Mentora inválida.");
    expect(tbMentoras).not.toContainEqual(resultado);
  });

  test("Deve retornar os dados da mentora com o id buscado", () => {
    const mentoraDados = new MentoraDados();
    const id = 2;
    const resultado = mentoraDados.verPerfilPorId(id);
    expect(typeof resultado).toEqual("object");
    expect(resultado.id).toEqual(id);
  });

  test("Deve retornar aviso de perfil não encontrado ao buscar id inválido", () => {
    const mentoraDados = new MentoraDados();
    const resultado = mentoraDados.verPerfilPorId("a");

    expect(resultado).toEqual(`Mentora não encontrada.`);
  });

  test("Deve retornar mentoras com habilidade de front-end", () => {
    const mentoraDados = new MentoraDados();
    const resultado = mentoraDados.verMentorasPorHabilidade(2);
    expect(resultado.length).toBe(1);
  });

  test("Deve retornar valores do database", () => {
    const mentoraDados = new MentoraDados();
    const resultado = mentoraDados.verPerfis();

    expect(resultado).toEqual(tbMentoras);
  });
});
