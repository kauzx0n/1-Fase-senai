programa {
  funcao inicio() {
    inteiro gramas
    real kilos, preco
    escreva("Bem vindo ao Pet Shop Ron Bernardo")
    escreva("\n")
    escreva("\nAqui nesse petshop nós temos um lema: “Aqui o cliente sempre tem ração”. a ração está R$10 o kilo, quanto você vai querer?")
    escreva("\n")
    escreva("\nQuantidade de gramas:")
    leia(gramas)
    kilos = gramas /1000
    preco = kilos *10
    escreva("\n")
    escreva("Como você vai querer " + gramas + " gramas o total vai ser de R$" + preco )
  }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 514; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */