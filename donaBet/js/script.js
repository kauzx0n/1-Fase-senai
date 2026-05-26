document.addEventListener('DOMContentLoaded', () => {
    let totalAcumulado = 0;
    const displayTotal = document.getElementById('total-placar');
    const displayMsg = document.getElementById('status-msg');
    const listaHistorico = document.getElementById('lista-historico');
    const btnReset = document.getElementById('btn-reset');
    const botoesDados = document.querySelectorAll('.btn-dado');

    // Função para rolar o dado
    const rolarDado = (faces) => {
        const resultado = Math.floor(Math.random() * faces) + 1;
        totalAcumulado += resultado;
        
        // Atualiza interface
        displayTotal.textContent = totalAcumulado;
        displayMsg.textContent = `Rolou D${faces}: tirou ${resultado}!`;
        
        // Adiciona ao histórico
        const novoItem = document.createElement('li');
        novoItem.textContent = `🎲 D${faces} resultou em ${resultado}`;
        listaHistorico.prepend(novoItem);
        
        // Limita tamanho do histórico visual
        if (listaHistorico.children.length > 8) {
            listaHistorico.lastChild.remove();
        }
    };

    // Event listeners para os botões de dados
    botoesDados.forEach(botao => {
        botao.addEventListener('click', () => {
            const faces = parseInt(botao.getAttribute('data-faces'));
            rolarDado(faces);
        });
    });

    // Event listener para reset
    btnReset.addEventListener('click', () => {
        totalAcumulado = 0;
        displayTotal.textContent = '0';
        displayMsg.textContent = 'Placar zerado pelo sistema.';
        listaHistorico.innerHTML = '';
    });
});