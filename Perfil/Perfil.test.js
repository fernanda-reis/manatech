const { tbPerfis } = require("../database");
const Habilidade = require("../Habilidade/Habilidade");
const Perfil = require("./Perfil");
const PerfilDbOperacoes = require("./PerfilDbOperacoes");
const PerfilDados = require("./PerfilDados");

describe("Teste da classe Perfil", () => {
  test("Deve ciar instância de perfil corretamente", () => {
    const habilidade = new Habilidade("Back-end");
    const perfil = new Perfil("Ana", "SP", habilidade);

    expect(perfil).toBeInstanceOf(Perfil);
  });
  test("Deve salvar perfil no database", () => {
    const habilidade = new Habilidade("Back-end");
    const perfil = new Perfil("Ana", "SP", habilidade);

    const perfilOperacoes = new PerfilDbOperacoes();
    const resultado = perfilOperacoes.salvarPerfil(perfil, tbPerfis);

    expect(resultado instanceof Perfil).toBeTruthy();
    expect(resultado.id).toEqual(2);
    expect(tbPerfis).toContainEqual(resultado);
  });

  test("Deve retornar aviso de perfil inválido e não salvar no database", () => {
    const perfil = new Perfil("Ana", "SP", "habilidadeInvalida");

    const perfilOperacoes = new PerfilDbOperacoes();
    const resultado = perfilOperacoes.salvarPerfil(perfil, tbPerfis);

    expect(resultado instanceof Perfil).toBeFalsy();
    expect(resultado).toEqual("Perfil inválido.");
    expect(tbPerfis).not.toContainEqual(resultado);
  });

  test("Deve retornar os dados de perfil do id buscado", () => {
    const perfilDados = new PerfilDados();
    const resultado = perfilDados.verPerfilPorId(1, tbPerfis);

    expect(typeof resultado).toEqual("object");
    expect(resultado.id).toEqual(1);
  });

  test("Deve retornar aviso de usuário não encontrado ao buscar id inválido", () => {
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
