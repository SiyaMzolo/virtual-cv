document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = document.getElementById('main-header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });

    // Sticky Header and Active Navigation Link on Scroll
    const header = document.getElementById('main-header');
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        // Sticky header
        header.classList.toggle('scrolled', window.pageYOffset > header.offsetHeight);

        // Active nav link
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 50; // Adjusted offset
            if (pageYOffset >= sectionTop) {
                current = '#' + section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });

        // Show/Hide Scroll-to-Top Button
        scrollToTopBtn.style.display = (window.pageYOffset > 300) ? 'block' : 'none';
    });

    // Scroll to Top Button Functionality
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Update current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
});