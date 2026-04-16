programa {
  funcao inicio() {
    real salario
    real agua
    real aluguel
    real luz
    real internet
    real gasolina
    real streamings
    real telefone
    real jogo, finalmes
    escreva("Salário:")
    leia(salario)
    escreva("Conta da água:")
    leia(agua)
    escreva("Valor do aluguel:")
    leia(aluguel)
    escreva("Conta da luz:")
    leia(luz)
    escreva("Conta da internet:")
    leia(internet)
    escreva("Quanto você pagou de gasolina esse mês:")
    leia(gasolina)
    escreva("Valor das assinaturas de streams:")
    leia(streamings)
    escreva("Valor do telefone:")
    leia(telefone)
    escreva("Gasto esse mês em jogos:")
    leia(jogo)
    finalmes = salario - agua - aluguel - luz - internet - gasolina - streamings - telefone - jogo
    escreva("Considerando que seu salário é de R$" + salario + " no final do mês vai sobrar R$" + finalmes + " para você gastar")
  }
}
