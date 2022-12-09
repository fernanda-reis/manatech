const { tbPerfis } = require("../database");
const Perfil = require("../Perfil/Perfil");
const PerfilDbOperacoes = require("../Perfil/PerfilDbOperacoes");
const PerfilDados = require("../Perfil/PerfilDados");
const Habilidade = require("../Habilidade/Habilidade");

describe("Teste da classe Perfil", () => {
  const area = { id: 1, descricao: "Back-end" };
  const tecnologias = ["java", "sql"];
  const habilidade = new Habilidade(area, tecnologias);
  test("Deve ciar instância de perfil corretamente", () => {
    const perfil = new Perfil("Ana", "SP", habilidade);

    expect(perfil).toBeInstanceOf(Perfil);
  });

  test("Deve salvar perfil no database", () => {
    const perfil = new Perfil("Ana", "SP", habilidade);

    const perfilOperacoes = new PerfilDbOperacoes();
    const resultado = perfilOperacoes.salvarPerfil(perfil, tbPerfis);

    expect(resultado instanceof Perfil).toBeTruthy();
    expect(tbPerfis).toContainEqual(resultado);
  });

  test("Deve retornar aviso de perfil inválido e não salvar no database", () => {
    const perfilOperacoes = new PerfilDbOperacoes();
    const resultado = perfilOperacoes.salvarPerfil("perfil invalido", tbPerfis);

    expect(resultado instanceof Perfil).toBeFalsy();
    expect(resultado).toEqual("Perfil inválido.");
    expect(tbPerfis).not.toContainEqual(resultado);
  });

  test("Deve retornar os dados do perfil com o id buscado", () => {
    const perfilDados = new PerfilDados();
    const resultado = perfilDados.verPerfilPorId(1);

    expect(typeof resultado).toEqual("object");
    expect(resultado.id).toEqual(1);
  });

  test("Deve retornar aviso de perfil não encontrado ao buscar id inválido", () => {
    const perfilDados = new PerfilDados();
    const resultado = perfilDados.verPerfilPorId("a", tbPerfis);

    expect(resultado).toEqual(`Perfil não encontrado.`);
  });

  test("Deve retornar valores do database", () => {
    const perfilDados = new PerfilDados();
    const resultado = perfilDados.verPerfis(tbPerfis);

    expect(resultado).toEqual(tbPerfis);
  });
});
