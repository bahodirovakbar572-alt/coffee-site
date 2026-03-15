document.addEventListener("DOMContentLoaded", () => {
    // 1. Reveal (paydo bo'lish) animatsiyasi uchun IntersectionObserver
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // 2. Burger menyu funksionalligi
    const burger = document.getElementById('burger');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinks = document.querySelectorAll('#nav-links li');

    if (burger) {
        burger.addEventListener('click', () => {
            // Menyuni ochish/yopish
            navLinksContainer.classList.toggle('nav-active');
            // Burger animatsiyasi (X shakli)
            burger.classList.toggle('toggle');
        });
    }

    // 3. Menyu ichidagi link bosilganda menyu yopilishi
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
});
