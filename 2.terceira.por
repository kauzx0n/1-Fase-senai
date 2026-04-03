programa {
  funcao inicio() {

   inteiro shows
   real preco
   inteiro totalDeBombas
   real custoTotal

   escreva("Quantos shows Sarumano tem marcados? ")
   leia(shows)

   escreva("Qual o preço de uma bomba de fumaça? ")
   leia(preco)

   totalDeBombas = shows * 7

   custoTotal = totalDeBombas * preco

   escreva("Total de bombas: " + totalDeBombas)
   escreva("\nCusto total: " + custoTotal)
  }
}
