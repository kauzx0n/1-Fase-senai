// Função simples e fácil de entender
function jogar(dinoEscolhido) {
    // 1. Pega o valor da aposta
    let aposta = document.getElementById("valorAposta").value;
    
    if (aposta === "") {
        alert("Por favor, digite o valor da aposta primeiro!");
        return; // Para o código aqui se não tiver aposta
    }

    // 2. Lista de todos os dinos possíveis
    let listaDeDinos = [
        "Espinossauro", "T-Rex", "Braquiossauro", 
        "Velocirraptor", "Estegossauro", "Triceratopo", 
        "Anquilossauro", "Parassaurolofo", "Alossauro", "Carnotauro"
    ];

    // 3. A máquina sorteia um número de 0 a 9 e escolhe o dino dessa posição
    let numeroAleatorio = Math.floor(Math.random() * 10);
    let dinoSorteado = listaDeDinos[numeroAleatorio];

    // 4. Mostra os nomes na tela
    document.getElementById("textoSeuDino").innerText = dinoEscolhido;
    document.getElementById("textoDinoSorteado").innerText = dinoSorteado;

    // 5. Verifica se ganhou ou perdeu
    let mensagem = document.getElementById("mensagemFinal");
    
    if (dinoEscolhido === dinoSorteado) {
        mensagem.innerText = "Parabéns! Você GANHOU!";
        mensagem.style.color = "yellow";
    } else {
        mensagem.innerText = "Que pena, você PERDEU.";
        mensagem.style.color = "red";
    }
}