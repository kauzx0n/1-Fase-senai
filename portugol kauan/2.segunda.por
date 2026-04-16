programa {
    funcao inicio() {
        
        inteiro caminhoes, jares
        real faturamento, custo, lucro

        escreva("Digite o número de caminhões: ")
        leia(caminhoes)

        jares = caminhoes * 50
        faturamento = jares * 90
        custo = caminhoes * 450
        lucro = faturamento - custo

        escreva("\nTotal de jarés: " + jares)
        escreva("\nFaturamento: R$ " + faturamento)
        escreva("\nCusto: R$ " + custo)
        escreva("\nLucro: R$ " + lucro)
    }
}