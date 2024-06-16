    const body = document.body;
    const imgElement = document.querySelector('.moon');
    const logoElement = document.querySelector('logo');

    function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    imgElement.src ='assets/images/Moon_fill.svg';
    logoElement.src ='assets/images/alarado-icon-homepage-dark.svg';
    }
