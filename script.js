// Smooth scrolling function
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove 'active' class from all navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked navigation link
        this.classList.add('active');

        // Remove 'active' class from all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });

        // Add 'active' class to the target section
        document.querySelector(this.getAttribute('href')).classList.add('active');

        // Scroll smoothly to the target section
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
