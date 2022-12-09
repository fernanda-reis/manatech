class HabilidadeFormatacao {
  formataHabilidade(habilidade) {
    const areaDesc = habilidade.area.descricao;
    const tecnologias = habilidade.tecnologias;
    const retorno = areaDesc + " = [ " + tecnologias + " ];";
    return retorno;
  }
}

module.exports = HabilidadeFormatacao;
