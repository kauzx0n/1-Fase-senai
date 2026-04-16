programa {
  funcao inicio() {
   inteiro clt
   inteiro pj
   inteiro estagiarios
   
    escreva("quantidade de CLTs: ")
    leia(clt)

    escreva("quantidade de PJs: ")
    leia(pj)

    escreva("A quantidade de estagiarios: ")
    leia(estagiarios)

    //processar / calcular
    inteiro total = clt + estagiarios + pj

    //mostrar os resultados
    escreva("Temos um total de " + total)
  }

}
