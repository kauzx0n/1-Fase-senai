programa {
  funcao inicio() {
   inteiro caracteres
   inteiro prompt = 5
    inteiro custo_token

   escreva("Digite a quantidade de caracteres do prompt: ")
   leia(caracteres)

   inteiro total_tokens = prompt + caracteres

   escreva("Digite o custo de cada token: ")
   leia(custo_token)

   escreva("Total de tokens: " + total_tokens)
   escreva(" Custo total em R$: " + custo_token)
  }
}
