programa {
  funcao inicio() {
    inteiro dev = 500
    inteiro hora_estimada = 350
    inteiro quantidade_hora, cobrar
    escreva("Quantidade de horas estimada: ")
    leia(quantidade_hora)
    hora_estimada = hora_estimada * quantidade_hora
    cobrar = hora_estimada + dev
    escreva("Junin deve cobrar R$" + cobrar + " do seu cliente, sendo R$500 desses R$" + cobrar + " só para o dev Denis Nery ")
    escreva("\nCobrando R$" + cobrar + " Junin vai ter R$" + hora_estimada + " de lucro")
  }
}
