// Selecionando elementos necessários e verificando sua existência
    const body = document.body;
    const imgElement = document.querySelector('.moon');
    const logoElement = document.querySelector('.logo');

// Função para alternar o modo escuro
    function toggleDarkMode() {
    body.classList.toggle('dark-mode');

// Verificando se os elementos existem antes de alterar suas propriedades
    if (imgElement) {
        imgElement.src = 'assets/images/Moon_fill.svg';
    }
    if (logoElement) {
        logoElement.src = 'assets/images/alarado-icon-homepage-dark.svg';
    }
    }


     
