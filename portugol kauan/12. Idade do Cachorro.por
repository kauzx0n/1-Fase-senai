programa {
  funcao inicio() {
    inteiro idade_cachorro, idade_humana

    escreva("Qual a idade do seu cachorro? ")
    leia(idade_cachorro)
    
    idade_humana = idade_cachorro * 7
    
    escreva("A idade dele em anos humanos e: ", idade_humana, "\n")

    se (idade_humana >= 60) {
      escreva("O doguinho ja pode se aposentar por idade :D\n")
    } senao {
      escreva("Ainda tem muita energia para gastar!\n")
    }
  }
}