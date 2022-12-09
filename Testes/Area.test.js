const AreaDados = require("../Area/AreaDados");
const { tbAreas } = require("../database");

describe("Testes da classe Area", () => {
  const areaDados = new AreaDados();

  test("Deve retornar valores do database", () => {
    const resultado = areaDados.listarAreas();
    expect(resultado).toEqual(tbAreas);
  });
  test("Deve retornar a area com o id buscado", () => {
    const id = 2;
    const resultado = areaDados.buscarAreaPorId(2);
    expect(typeof resultado).toEqual("object");
    expect(resultado.id).toEqual(id);
  });
});
