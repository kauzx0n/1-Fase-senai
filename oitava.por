programa {
  funcao inicio() {
    real gastos = 8750
    real faturamentoIngresso = 8200
    real faturamentoItem = 6000
    real lucro = 0
    real lucroPercentual = 0
    real ganhoLucro = 0

    lucro = faturamentoIngresso + faturamentoItem
    ganhoLucro = lucro - gastos
    lucroPercentual = (ganhoLucro / gastos) * 100
    
    escreva("O total do lucro obtido em reais é de R$ " + ganhoLucro)
    escreva("\nO total do Percentual é de " + lucroPercentual + "% de lucro")

  }
}
