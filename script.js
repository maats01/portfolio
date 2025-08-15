// esperando o DOMContentLoad para carregar o ScrollReveal na página
document.addEventListener('DOMContentLoaded', function() {
    // opções gerais pro scroll reveal
    const scrollRevealOptions = {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        opacity: 0,
        origin: 'bottom',
        reset: false
    };

    const sr = ScrollReveal(scrollRevealOptions);

    // revela os elementos
    sr.reveal('h4,h3,h2,h1');
    sr.reveal('.contact-links, p', { delay: 200 });
    sr.reveal('ul', { delay: 400 });
    sr.reveal('.project-card', { interval: 150 });

});