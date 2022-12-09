const VinculoMentoria = require("../Entidades/VinculoMentoria/VinculoMentoria");

describe("Testes da classe VinculoMentoria", () => {
  const vinculoMentoria = new VinculoMentoria();
  test("Deve retornar vínculo de mentoria criado com sucesso", () => {
    const retorno = vinculoMentoria.criarVinculoMentoria(1, 1);
    expect(retorno).toEqual("Vínculo de mentoria criado com sucesso!");
  });
  test("Deve retornar vínculo de mentoria inválido", () => {
    const retorno = vinculoMentoria.criarVinculoMentoria("a", "b");
    expect(retorno).toEqual("Vínculo de mentoria inválido.");
  });
});
