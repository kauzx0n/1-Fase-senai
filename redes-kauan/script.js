const card = document.getElementById('tilt-card');
const overlay = document.getElementById('click-overlay');
const badge = document.getElementById('creator-badge'); 
const music = document.getElementById('bg-music');
const viewDisplay = document.getElementById('view-number');

// 1. Lógica do Contador
let views = localStorage.getItem('kaka_views');
if (!views) {
    views = 8271;
} else {
    views = parseInt(views) + 1;
}
localStorage.setItem('kaka_views', views);
viewDisplay.innerText = views.toLocaleString();

// 2. Entrar no site e ativar animações
overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 800);
    
    // Ativa o card
    card.classList.add('active');
    
    // Traz a palavra "Criado por Kaka" APENAS AGORA
    badge.classList.add('active');
    
    // ZERA O DESFOQUE do fundo, deixando a imagem 100% nítida
    document.getElementById('background').style.filter = 'blur(0px) brightness(0.4)';
    
    music.volume = 0.5;
    music.play();
});

// 3. Efeito Tilt Suave
document.addEventListener('mousemove', (e) => {
    if (!card.classList.contains('active')) return;
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45; 
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Resetar Tilt
document.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.8s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
document.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});