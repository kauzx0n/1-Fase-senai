programa {
  funcao inicio() {
    real salarioMensal = 5575
    real diasTrabalhados = 30
    real diaria = 0
    real semanal = 0

    diaria = salarioMensal / diasTrabalhados
    escreva("O junin recebe R$ " + diaria)
    semanal = diaria *5
    escreva("\nJunin recebe por semana o total de R$ " + semanal)
  }
}
