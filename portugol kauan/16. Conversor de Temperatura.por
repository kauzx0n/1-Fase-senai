programa {
  funcao inicio() {
    real celsius, fahrenheit

    escreva("Digite a temperatura em Celsius: ")
    leia(celsius)

    // Formula de conversao
    fahrenheit = (celsius * 9.0 / 5.0) + 32
    
    escreva("A temperatura em Fahrenheit e: ", fahrenheit, "\n")

    se (fahrenheit > 68) {
      escreva("Alerta de super calor!")
    }
  }
}