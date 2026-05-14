const card = document.getElementById('tilt-card');
const overlay = document.getElementById('click-overlay');
const badge = document.getElementById('creator-badge'); 
const music = document.getElementById('bg-music');
const viewDisplay = document.getElementById('view-number');

// Lógica do Contador
let views = localStorage.getItem('kaka_views');
if (!views) {
    views = 8271;
} else {
    views = parseInt(views) + 1;
}
localStorage.setItem('kaka_views', views);
viewDisplay.innerText = views.toLocaleString();

// Entrar no site e ativar animações (e a MÚSICA)
overlay.addEventListener('click', () => {
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 800);
    
    // Ativa o card e o selo
    card.classList.add('active');
    badge.classList.add('active');
    
    // Zera o desfoque do fundo
    document.getElementById('background').style.filter = 'blur(0px) brightness(0.4)';
    
    // TOCA A MÚSICA
    music.volume = 0.5;
    music.play();
});

// Efeito Tilt Suave
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