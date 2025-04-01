const AnaliseDeDados = require("../src/analiseDeDados");

describe("Classe AnaliseDeDados", () => {
  let dados;

  beforeEach(() => {
    dados = new AnaliseDeDados(); 
    dados.adicionarDados([1])
    dados.adicionarDados([2])
    dados.adicionarDados([3])
  });


  test("Depositar valores númericos para o array de dados", async () => {
    dados.adicionarDados([4]);
  
    expect(dados.ordenarDados()).toEqual([1,2,3,4]);
  });

  test("Depositar valores númericos para o array de dados", async () => {
    dados.adicionarDados([4]);
  
    expect(dados.ordenarDados()).toEqual([1,2,3,4]);
  });

});