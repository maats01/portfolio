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

// funcionalidade que altera o tema de cores do site

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

// tema salvo no local storage do usuário
const savedTheme = localStorage.getItem('theme') || 'light';

// função para aplicar os estilos corretos no HTML, de acordo com o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggleBtn.title = "Alternar para tema claro";
    } else {
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggleBtn.title = "Alternar para tema escuro";
    }
}

// aplica o tema salvo do usuário ou aplica o tema padrão
applyTheme(savedTheme);

// evento de click no botão de alterar o tema
themeToggleBtn.addEventListener('click', () => {
    // verifica se o tema atual é escuro
    const isDarkMode = body.classList.contains('dark-mode');
    
    // define o novo tema de acordo com o tema atual
    const newTheme = isDarkMode ? 'light' : 'dark';
    
    applyTheme(newTheme);
    
    // salva o novo tema no localStorage
    localStorage.setItem('theme', newTheme);
});
