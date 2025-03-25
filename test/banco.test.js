const Banco = require("../src/banco");

describe('Testes da classe Banco', () => {
  let banco;

  beforeEach(() => {
    banco = new Banco('BB', 100);
    bancoDestino = new Banco('Picpay', 100);
  });

  test('Deve depositar valor na conta desejada', () => {
    banco.depositar(100);
    expect(banco.saldo).toBe(200);
  });

  test('Não deve sacar se não houver saldo', () => {
    banco.sacar(50);
    expect(banco.saldo).toBe(50);
  });

  test('Deve realizar a transferencia para conta desejada', () => {
    banco.transferir(100, bancoDestino);
    expect(banco.saldo).toBe(0);
    expect(bancoDestino.saldo).toBe(200);
  });

  test('Deve retornar o saldo do banco', () => {
    expect(banco.obterSaldo()).toBe(100);
  });

  test('Deve obter histórico das transações', () => {
    // expect(banco.obterHistorico()).toBe();
  });


  test('Deve definir limite de saque', () => {
    banco.definirLimiteDeSaque(20)
    expect(banco.limiteDeSaque).toBe(20);
  });

  test('Deve verificar se o saldo está dentro do limite de saque', () => {
    expect(banco.verificarLimiteDeSaque(20)).toBe(true);
  });

  test('Deve aplicar juros no saldo e retornar o novo valor', () => {
    banco.aplicarJuros(10)
    expect(banco.saldo).toBe(110);
  });

  test('Deve pagar conta', () => {
    banco.pagarConta(100, 'teste pagamento')
    expect(banco.saldo).toBe(0)
    // expect(banco.transacoes).toBe({ tipo: 'Pagamento', valor: 100, descricao: 'teste pagamento' });
  });

  test('Deve obter o total depositado', () => {
    banco.depositar(100);
    banco.depositar(150);

    expect(banco.obterTotalDepositado()).toBe(250)
  });
});
