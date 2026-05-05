programa {
  funcao inicio() {
    real peso, altura, imc

    escreva("Digite seu peso (kg): ")
    leia(peso)
    
    escreva("Digite sua altura (m): ")
    leia(altura)

    imc = peso / (altura * altura)
    
    escreva("Seu IMC e: ", imc, "\n")

    se (imc < 25) {
      escreva("Seu IMC esta abaixo de 25.")
    } senao {
      escreva("Seu IMC e 25 ou maior.")
    }
  }
}