programa {
  funcao inicio() {
    inteiro idade

    escreva("Digite sua idade: ")
    leia(idade)

    se (idade >= 16) {
      escreva("Voce ja e elegivel para votar!")
    } senao {
      escreva("Voce ainda nao pode votar.")
    }
  }
}