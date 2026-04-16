programa {
  funcao inicio() {
    real relatorioPf = 40
    real relatorioPj = 33

    real tempoRelatorioPf = 12
    real tempoRelatorioPj = 42

    real valorTotalPf = 2350
    real valorTotalPj = 8900

    escreva("O valor do relatorio é de " + (relatorioPf + relatorioPj))
    escreva("\nO total de tempo trabalhado é de " + (tempoRelatorioPf + tempoRelatorioPj))
    escreva("\nO total recebido é de R$ " + (valorTotalPf + valorTotalPj))
    escreva("\nA media de tempo gasto de pj é de " + (tempoRelatorioPj / relatorioPj))
    escreva("\nA media de tempo gasto de pj é de " + (tempoRelatorioPf / relatorioPf))
    escreva("\nA media do valor total de pf é de R$  " + (valorTotalPf / relatorioPf))
    escreva("\nA media do valor total de pj é de R$  " + (valorTotalPj / relatorioPj))
  }
}
