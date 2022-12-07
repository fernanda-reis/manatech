const Mentora = require("../Mentora/Mentora");
const VinculoMentoria = require("./VinculoMentoria");

describe("Testes da classe VinculoMentoria", () => {
  const vinculoMentoria = new VinculoMentoria();
  test("Deve retornar vínculo de mentoria criado com sucesso", () => {
    const retorno = vinculoMentoria.criarVinculoMentoria(2, 1);
    expect(retorno).toEqual("Vínculo de mentoria criado com sucesso!");
  });
  test("Deve retornar vínculo de mentoria inválido", () => {
    const retorno = vinculoMentoria.criarVinculoMentoria(2, 1);
    expect(retorno).toEqual("Vínculo de mentoria inválido.");
  });
});
