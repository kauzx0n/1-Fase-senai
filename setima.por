programa {
  funcao inicio() {
    real custoIgreja = 3250
    real doacaoIgreja = 1625
    real dizimosIgreja = 450
    real totalDoacaoMenosMensal = 0
    real somaIgreja = 0
    real totalMensal = 0

    somaIgreja = (dizimosIgreja + doacaoIgreja)
    totalMensal = (custoIgreja - somaIgreja)
escreva("Esta faltando o total de R$ " + totalMensal)
escreva(" Para completar o aluguel da igreja!")
  }
}
