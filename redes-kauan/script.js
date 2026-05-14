const card = document.getElementById('tilt-card');
const overlay = document.getElementById('click-overlay');
const badge = document.getElementById('creator-badge'); 
const music = document.getElementById('bg-music');
const viewDisplay = document.getElementById('view-number');

const muteBtn = document.getElementById('mute-btn');
const muteIcon = muteBtn.querySelector('i');

// Lógica do Contador
let views = localStorage.getItem('kaka_views');
if (!views) {
    views = 8271;
} else {
    views = parseInt(views) + 1;
}
localStorage.setItem('kaka_views', views);
viewDisplay.innerText = views.toLocaleString();

// Função para iniciar o site e a música
function iniciarExperiencia() {
    if (overlay.style.display === 'none') return; // Evita que ative duas vezes
    
    overlay.style.opacity = '0';
    setTimeout(() => overlay.style.display = 'none', 800);
    
    card.classList.add('active');
    badge.classList.add('active');
    muteBtn.classList.add('active'); 
    
    document.getElementById('background').style.filter = 'blur(0px) brightness(0.4)';
    
    music.volume = 0.5;
    music.play().catch(erro => console.log("Áudio bloqueado pelo celular", erro));
}

// Aceita tanto CLIQUE (PC) quanto TOQUE (Celular) na tela preta
overlay.addEventListener('click', iniciarExperiencia);
overlay.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    iniciarExperiencia();
}, { passive: false });

// Função para mutar/desmutar
function alternarMutar(e) {
    e.preventDefault(); // Evita bugs no celular
    if (music.muted) {
        music.muted = false;
        muteIcon.classList.remove('fa-volume-xmark');
        muteIcon.classList.add('fa-volume-high');
    } else {
        music.muted = true;
        muteIcon.classList.remove('fa-volume-high');
        muteIcon.classList.add('fa-volume-xmark');
    }
}

// Aceita CLIQUE ou TOQUE no botão de música
muteBtn.addEventListener('click', alternarMutar);
muteBtn.addEventListener('touchstart', alternarMutar, { passive: false });

// Efeito Tilt Suave (Só funciona no PC, no celular ele ignora)
document.addEventListener('mousemove', (e) => {
    if (!card.classList.contains('active')) return;
    const xAxis = (window.innerWidth / 2 - e.pageX) / 45; 
    const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    card.style.transition = "transform 0.8s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
document.addEventListener('mouseenter', () => {
    card.style.transition = "none";
});