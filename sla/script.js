// Adicione este script no final do seu arquivo HTML ou em um arquivo .js separado
document.querySelector('.logo-link').addEventListener('click', function() {
    location.reload();
});

// Adicione este script no final do seu arquivo HTML ou em um arquivo .js separado
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });

    // Adicione esta parte para fechar o menu quando um link for clicado
    var menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            menu.classList.remove('open');
        });
    });
});


