programa {
  funcao inicio() {
    real preco
    real saldo

    escreva("\nSeu saldo disponivel é de R$ 1200")

    escreva("\nInsira o preço do item: ")
    leia(preco)

    se(preco > 1201){
    escreva("Item fora do seu orçamento. Por favor insira um novo valor! ")
    }senao{
    escreva("Voce pode comprar o item. Transiçao realizada ")
    }

  }
}
