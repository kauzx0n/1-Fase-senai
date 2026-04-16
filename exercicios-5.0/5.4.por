programa {
  funcao inicio() {
    // Declaração de variáveis
    inteiro opcao

    // Menu de entrada
    escreva("--- Palestras do Mano Juca ---\n")
    escreva("Digite o número da palestra (1 a 5): ")
    leia(opcao)

    escreva("\n------------------------------\n")

    // Estrutura de decisão para selecionar a palestra
    escolha (opcao) {
      caso 1:
        escreva("Palestra: Animações com Scratch\n")
        escreva("Local: Laboratório 305\n")
        escreva("Horário: 19h")
        pare
      caso 2:
        escreva("Palestra: Scratch para gamers\n")
        escreva("Local: Laboratório 512\n")
        escreva("Horário: 20h")
        pare
      caso 3:
        escreva("Palestra: JavaScript para leigos\n")
        escreva("Local: Laboratório 101\n")
        escreva("Horário: 19h")
        pare
      caso 4:
        escreva("Palestra: Tópicos avançados de JavaScript\n")
        escreva("Local: Laboratório 305\n")
        escreva("Horário: 20h")
        pare
      caso 5:
        escreva("Palestra: Vida e carreira\n")
        escreva("Local: Auditório\n")
        escreva("Horário: 21h")
        pare
      caso contrario:
        escreva("Opção inválida! Escolha um número de 1 a 5.")
    }
    
    escreva("\n------------------------------\n")
  }
}