// Array com 4 camisas de times do Brasileirão 2026 adicionado!
const produtosBD = [
    { id: 1, nome: "Camisa do Brasil Azul - Manto 2026", precoDe: 209.90, precoPor: 161.83, categoria: "selecoes", img: "https://i.postimg.cc/3J9cpKd9/camisa-do-brasil-azul-away1-f931ff93c1ec340a0c17652211085465-1024-1024.webp", imgDetalhe: "https://i.postimg.cc/vHbx6yVH/Captura-de-tela-2026-05-04-205031.png"},
    { id: 2, nome: "Camisa do Brasil - Manto 2026", precoDe: 209.90, precoPor: 193.11, categoria: "selecoes", img: "https://i.postimg.cc/fy7mXTCb/img-1760-14ac343b97c1f61d2317742143290569-1024-1024.webp", imgDetalhe: "https://i.postimg.cc/9X60Ghq3/5822e92a.jpg"},
    { id: 3, nome: "Camisa do Brasil - Home 26", precoDe: 209.90, precoPor: 193.11, categoria: "selecoes", img: "https://i.postimg.cc/FzDrL2MJ/4b015d69.jpg", imgDetalhe: "https://i.postimg.cc/sx9B06tp/3c51fc56.jpg"},
    { id: 4, nome: "Camisa do Brasil - Home 23/24", precoDe: 229.90, precoPor: 179.90, categoria: "selecoes", img: "https://i.postimg.cc/zBdWJPdZ/977f0869.jpg", imgDetalhe: "https://i.postimg.cc/1tW69YWx/b4623227.jpg"},
    { id: 5, nome: "Camisa Real Madrid - Home 23/24", precoDe: 229.90, precoPor: 189.90, categoria: "europeus", img: "https://i.postimg.cc/GtnSdt9k/camisa-real-madrid-home-23-24-torcedor-adidas-imagem-1-jpeg1-7175dabd9eea79851e16859218075668-1024-1.webp", imgDetalhe:  "https://i.postimg.cc/59LbWFj6/5767aad6.jpg"},
    { id: 6, nome: "Camisa Corinthians - Home 2024", precoDe: 229.90, precoPor: 189.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFFFF/000000?text=FOTO+CORINTHIANS", imgDetalhe: "https://placehold.co/150x150/FFFFFF/000000?text=ESCUDO" },
    
    // --- INÍCIO ADIÇÃO BRASILEIRÃO 2026 ---
    { id: 101, nome: "Camisa Palmeiras - Titular 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/006400/FFFFFF?text=FOTO+PALMEIRAS+HOME", imgDetalhe: "https://placehold.co/150x150/006400/FFFFFF?text=ESCUDO" },
    { id: 102, nome: "Camisa Palmeiras - Reserva 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFFFF/006400?text=FOTO+PALMEIRAS+AWAY", imgDetalhe: "https://placehold.co/150x150/FFFFFF/006400?text=ESCUDO" },
    { id: 103, nome: "Camisa Palmeiras - Terceira 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/7FFF00/006400?text=FOTO+PALMEIRAS+THIRD", imgDetalhe: "https://placehold.co/150x150/7FFF00/006400?text=ESCUDO" },
    { id: 104, nome: "Camisa Palmeiras - Goleiro 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/0000CD/FFFFFF?text=FOTO+PALMEIRAS+GK", imgDetalhe: "https://placehold.co/150x150/0000CD/FFFFFF?text=ESCUDO" },

    { id: 105, nome: "Camisa São Paulo - Titular 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFFFF/000000?text=FOTO+SPFC+HOME", imgDetalhe: "https://placehold.co/150x150/FFFFFF/000000?text=ESCUDO" },
    { id: 106, nome: "Camisa São Paulo - Reserva 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FF0000/FFFFFF?text=FOTO+SPFC+AWAY", imgDetalhe: "https://placehold.co/150x150/FF0000/FFFFFF?text=ESCUDO" },
    { id: 107, nome: "Camisa São Paulo - Terceira 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/000000/FFFFFF?text=FOTO+SPFC+THIRD", imgDetalhe: "https://placehold.co/150x150/000000/FFFFFF?text=ESCUDO" },
    { id: 108, nome: "Camisa São Paulo - Goleiro 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/00008B/FFFFFF?text=FOTO+SPFC+GK", imgDetalhe: "https://placehold.co/150x150/00008B/FFFFFF?text=ESCUDO" },

    { id: 109, nome: "Camisa Grêmio - Titular 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/87CEEB/000000?text=FOTO+GREMIO+HOME", imgDetalhe: "https://placehold.co/150x150/87CEEB/000000?text=ESCUDO" },
    { id: 110, nome: "Camisa Grêmio - Reserva 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFFFF/87CEEB?text=FOTO+GREMIO+AWAY", imgDetalhe: "https://placehold.co/150x150/FFFFFF/87CEEB?text=ESCUDO" },
    { id: 111, nome: "Camisa Grêmio - Terceira 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/000000/87CEEB?text=FOTO+GREMIO+THIRD", imgDetalhe: "https://placehold.co/150x150/000000/87CEEB?text=ESCUDO" },
    { id: 112, nome: "Camisa Grêmio - Goleiro 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFF00/000000?text=FOTO+GREMIO+GK", imgDetalhe: "https://placehold.co/150x150/FFFF00/000000?text=ESCUDO" },

    { id: 113, nome: "Camisa Atlético-MG - Titular 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/000000/FFFFFF?text=FOTO+GALO+HOME", imgDetalhe: "https://placehold.co/150x150/000000/FFFFFF?text=ESCUDO" },
    { id: 114, nome: "Camisa Atlético-MG - Reserva 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FFFFFF/000000?text=FOTO+GALO+AWAY", imgDetalhe: "https://placehold.co/150x150/FFFFFF/000000?text=ESCUDO" },
    { id: 115, nome: "Camisa Atlético-MG - Terceira 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/A9A9A9/000000?text=FOTO+GALO+THIRD", imgDetalhe: "https://placehold.co/150x150/A9A9A9/000000?text=ESCUDO" },
    { id: 116, nome: "Camisa Atlético-MG - Goleiro 2026", precoDe: 249.90, precoPor: 199.90, categoria: "brasileirao", img: "https://placehold.co/600x600/FF4500/FFFFFF?text=FOTO+GALO+GK", imgDetalhe: "https://placehold.co/150x150/FF4500/FFFFFF?text=ESCUDO" }
    // --- FIM ADIÇÃO BRASILEIRÃO 2026 ---
];

let carrinho = [];
const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function mostrarTela(tela) {
    document.getElementById('tela-loja').style.display = 'none';
    document.getElementById('tela-carrinho').style.display = 'none';
    document.getElementById('tela-checkout').style.display = 'none';

    if (tela === 'loja') {
        document.getElementById('tela-loja').style.display = 'block';
    } else if (tela === 'carrinho') {
        document.getElementById('tela-carrinho').style.display = 'block';
        renderizarCarrinho();
    } else if (tela === 'checkout') {
        document.getElementById('tela-checkout').style.display = 'block';
    }
}

function filtrarCategoria(cat) {
    // 1. Força a tela a voltar para a loja caso o usuário esteja no carrinho
    mostrarTela('loja');
    
    // 2. Remove o destaque de todos os botões do menu
    document.querySelectorAll('.navbar button').forEach(btn => btn.classList.remove('ativo'));
    
    // 3. Adiciona destaque no botão que foi clicado (protegido contra cliques no ícone)
    if (event && event.target) {
        let btn = event.target.closest('button');
        if (btn) btn.classList.add('ativo');
    }

    // 4. Renderiza os produtos filtrados
    renderizarVitrine(cat);
}

function renderizarVitrine(categoria = 'todas') {
    const vitrine = document.getElementById('vitrine');
    vitrine.innerHTML = '';
    const produtosExibir = categoria === 'todas' ? produtosBD : produtosBD.filter(p => p.categoria === categoria);

    produtosExibir.forEach(p => {
        vitrine.innerHTML += `
            <div class="produto-card" onclick="abrirModalProduto(${p.id})">
                <span class="tag-promo">Leve 3 Pague 2</span>
                <div class="produto-img-container">
                    <img src="${p.img}" class="produto-img" alt="${p.nome}">
                    <img src="${p.imgDetalhe}" class="img-detalhe-inlay" alt="Detalhe Bordado">
                </div>
                <div class="produto-info">
                    <h4>${p.nome}</h4>
                    <div class="preco-area">
                        <p class="preco-antigo">R$ ${p.precoDe.toFixed(2).replace('.', ',')}</p>
                        <p class="preco-pix">R$ ${p.precoPor.toFixed(2).replace('.', ',')} <span style="font-size: 0.8rem; color: var(--green-price);">no pix</span></p>
                    </div>
                    <button class="btn-comprar">COMPRAR AGORA</button>
                </div>
            </div>`;
    });
}

// --- LÓGICA DO NOVO MODAL ---
let produtoAtualModal = null;
let tamanhoSelecionadoModal = null;

function abrirModalProduto(id) {
    const p = produtosBD.find(prod => prod.id === id);
    produtoAtualModal = p;
    tamanhoSelecionadoModal = null; // Reseta o tamanho

    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-titulo').innerText = p.nome;
    document.getElementById('modal-preco-antigo').innerText = `R$ ${p.precoDe.toFixed(2).replace('.', ',')}`;
    document.getElementById('modal-preco-pix').innerHTML = `R$ ${p.precoPor.toFixed(2).replace('.', ',')} <span style="font-size: 1rem; font-weight:700;">no pix</span>`;
    document.getElementById('modal-parcela').innerText = `ou 12x de R$ ${(p.precoDe / 12).toFixed(2).replace('.', ',')}`;
    
    document.getElementById('modal-adicional').value = 'Lisa';

    // Reseta os botões de tamanho visualmente
    document.querySelectorAll('.tamanho-btn').forEach(btn => btn.classList.remove('selected'));

    document.getElementById('modal-produto').style.display = 'flex';
}

function fecharModalProduto() {
    document.getElementById('modal-produto').style.display = 'none';
}

function selecionarTamanho(btn, tamanho) {
    document.querySelectorAll('.tamanho-btn').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    tamanhoSelecionadoModal = tamanho;
}

function adicionarAoCarrinhoPeloModal() {
    if (!tamanhoSelecionadoModal) {
        alert("Por favor, selecione um tamanho antes de adicionar ao carrinho!");
        return;
    }

    const adicional = document.getElementById('modal-adicional').value;
    let precoFinal = produtoAtualModal.precoPor;
    if (adicional === "Personalizada") precoFinal += 20;

    carrinho.push({ 
        ...produtoAtualModal, 
        idUnico: Date.now(), 
        tamanho: tamanhoSelecionadoModal, 
        adicional: adicional, 
        precoFinal: precoFinal 
    });

    document.getElementById('contador-cart').innerText = carrinho.length;
    fecharModalProduto();

    // Pequeno feedback visual na página principal
    const btnCart = document.querySelector('.cart-btn');
    btnCart.style.color = "var(--green-price)";
    btnCart.style.transform = "scale(1.3)";
    setTimeout(() => {
        btnCart.style.color = "var(--white)";
        btnCart.style.transform = "scale(1)";
    }, 500);
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const modalProd = document.getElementById('modal-produto');
    if (event.target == modalProd) fecharModalProduto();
}

function abrirMedidas() { document.getElementById('modal-medidas').style.display = 'flex'; }
function fecharMedidas() { document.getElementById('modal-medidas').style.display = 'none'; }

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(i => i.idUnico !== id);
    document.getElementById('contador-cart').innerText = carrinho.length;
    renderizarCarrinho();
}

// --- LÓGICA DE CÁLCULO DE FRETE ---
function calcularResumo() {
    let totalBruto = 0, desconto = 0;
    let qtd = carrinho.length;
    let ordenado = [...carrinho].sort((a, b) => a.precoFinal - b.precoFinal);
    
    carrinho.forEach(i => totalBruto += i.precoFinal);
    
    // Lógica do desconto Leve 3 Pague 2
    for(let i = 0; i < Math.floor(qtd / 3); i++) {
        desconto += ordenado[i].precoFinal;
    }
    
    // Lógica do frete atualizada
    let freteValor = 0;
    let freteTexto = "";
    
    if (qtd === 1) {
        freteValor = 31.00;
        freteTexto = formatarMoeda(freteValor);
    } else if (qtd === 2) {
        freteValor = 26.00;
        freteTexto = formatarMoeda(freteValor);
    } else if (qtd >= 3) {
        freteValor = 0.00;
        freteTexto = '<span style="color:var(--green-price); font-weight:bold;">Grátis</span>';
    } else {
        freteTexto = "R$ 0,00";
    }

    let totalFinal = totalBruto - desconto + freteValor;

    return `
        <div class="resumo-linha"><span>Subtotal:</span> <span>${formatarMoeda(totalBruto)}</span></div>
        ${desconto > 0 ? `<div class="resumo-linha" style="color:var(--cyan-accent); font-weight:bold;"><span>Desconto Leve 3 Pague 2:</span> <span>- ${formatarMoeda(desconto)}</span></div>` : ''}
        <div class="resumo-linha"><span>Frete:</span> <span>${freteTexto}</span></div>
        <div class="resumo-linha total-linha"><span>Total:</span> <span>${formatarMoeda(totalFinal)}</span></div>
    `;
}

function renderizarCarrinho() {
    const lista = document.getElementById('lista-carrinho');
    lista.innerHTML = '';
    if (carrinho.length === 0) {
        lista.innerHTML = `<div class="box-escura" style="text-align:center;"><p>Seu carrinho está vazio.</p></div>`;
        document.getElementById('area-resumo-carrinho').style.display = 'none';
        return;
    }
    document.getElementById('area-resumo-carrinho').style.display = 'block';
    carrinho.forEach(item => {
        lista.innerHTML += `
            <div class="item-carrinho">
                <img src="${item.img}">
                <div class="item-detalhes" style="width: 100%;">
                    <h4>${item.nome}</h4>
                    <span class="item-atributos">Tam: ${item.tamanho} | Adicional: ${item.adicional}</span>
                    <div class="item-preco-box">
                        <span class="item-preco">${formatarMoeda(item.precoFinal)}</span>
                        <button class="btn-remover" onclick="removerDoCarrinho(${item.idUnico})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            </div>`;
    });
    const htmlResumo = calcularResumo();
    document.getElementById('detalhes-valores-carrinho').innerHTML = htmlResumo;
    document.getElementById('detalhes-valores-checkout').innerHTML = htmlResumo;
}

function buscarCEP() {
    let cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep.length === 8) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                if (!data.erro) {
                    document.getElementById('rua').value = data.logradouro;
                    document.getElementById('bairro').value = data.bairro;
                    document.getElementById('cidade').value = data.localidade;
                    document.getElementById('uf').value = data.uf;
                    document.getElementById('numero').focus();
                }
            });
    }
}

 // A FUNÇÃO DE PROCESSAR O PEDIDO FOI ATUALIZADA AQUI PARA O WHATSAPP
        function processarPedido(e) {
            e.preventDefault();

            // 1. Pega os dados que o cliente digitou no formulário
            const nome = document.getElementById('nomeCompleto').value;
            const rua = document.getElementById('rua').value;
            const numero = document.getElementById('numero').value;
            const bairro = document.getElementById('bairro').value;
            const cidade = document.getElementById('cidade').value;
            const uf = document.getElementById('uf').value;

            // 2. Calcula os totais e monta a lista de camisas
            let textoItens = '';
            let totalBruto = 0;
            let desconto = 0;
            let ordenado = [...carrinho].sort((a, b) => a.precoFinal - b.precoFinal);

            carrinho.forEach((item, index) => {
                textoItens += `${index + 1}. ${item.nome} (Tam: ${item.tamanho}) - ${item.adicional} - ${formatarMoeda(item.precoFinal)}\n`;
                totalBruto += item.precoFinal;
            });

            for(let i = 0; i < Math.floor(carrinho.length / 3); i++) {
                desconto += ordenado[i].precoFinal;
            }
            const totalFinal = totalBruto - desconto;

            // 3. Monta o texto bonitinho para o WhatsApp
            let mensagem = `*NOVO PEDIDO - KAUAN STORE* ⚽\n\n`;
            mensagem += `*Cliente:* ${nome}\n`;
            mensagem += `*Endereço para entrega:* ${rua}, ${numero} - ${bairro}, ${cidade}/${uf}\n\n`;
            mensagem += `*ITENS DO PEDIDO:*\n${textoItens}\n`;

            if (desconto > 0) {
                mensagem += `*Subtotal:* ${formatarMoeda(totalBruto)}\n`;
                mensagem += `*Desconto (Leve 3 Pague 2):* - ${formatarMoeda(desconto)}\n`;
            }
            mensagem += `*TOTAL A PAGAR:* ${formatarMoeda(totalFinal)}\n\n`;
            mensagem += `Olá! Gostaria de finalizar este pedido. Aguardo o link de pagamento ou chave PIX!`;

            // 4. Cria o link com o seu número (55 + DDD + Número)
            const numeroZap = "5548999591214";
            
            // Converte o texto para formato de link
            const urlZap = `https://wa.me/${numeroZap}?text=${encodeURIComponent(mensagem)}`;

            // 5. Abre o WhatsApp do cliente
            window.open(urlZap, '_blank');

            // 6. Limpa o carrinho e volta para a tela inicial
            carrinho = [];
            document.getElementById('contador-cart').innerText = '0';
            document.getElementById('form-checkout').reset();
            mostrarTela('loja');
            }

// Inicialização
mostrarTela('loja');
renderizarVitrine('todas');