document.getElementById('start-animation').addEventListener('click', function() {
    const flower = document.querySelector('.flower');
    const particles = document.querySelectorAll('.particles div');
    
    // Animação de crescimento da flor
    flower.style.transform = 'scale(1)';

    // Animação das partículas de água
    particles.forEach(particle => {
        particle.style.opacity = '1';
        particle.style.transform = 'translateY(-60px)';
    });
});
