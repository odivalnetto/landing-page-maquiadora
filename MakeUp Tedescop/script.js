// MENU SUAVE

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function(event) {

        event.preventDefault();

        const sectionId = this.getAttribute('href');

        const section = document.querySelector(sectionId);

        section.scrollIntoView({
            behavior: 'smooth'
        });

    });
});


// ANIMAÇÃO AO CARREGAR A PÁGINA

window.addEventListener('load', () => {

    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');

    heroText.style.opacity = '1';
    heroText.style.transform = 'translateX(0)';

    heroImage.style.opacity = '1';
    heroImage.style.transform = 'translateX(0)';
});


// BOTÃO WHATSAPP

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });

});