programa {
  funcao inicio() {
    real preco, saldo

    escreva("Digite o preco do item: ")
    leia(preco)

    escreva("Digite o seu saldo: ")
    leia(saldo)

    se (saldo >= preco) {
      escreva("Legal, voce pode comprar o item!")
    } senao {
      escreva("Puts, saldo insuficiente.")
    }
  }
}