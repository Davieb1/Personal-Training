document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav ul');
    const serviceButtons = document.querySelectorAll('.service-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    const closeButtons = document.querySelectorAll('.close-btn');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const serviceId = button.getAttribute('data-service');
            const serviceCard = document.getElementById(serviceId);
            if (serviceCard) {
                serviceCards.forEach(card => card.style.display = 'none');
                serviceCard.style.display = 'flex'; // Changed to 'flex' to use flex properties
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        serviceCards.forEach(card => {
            if (event.target === card) {
                card.style.display = 'none';
            }
        });
    });

    // Smooth scrolling for the navigation links
    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

