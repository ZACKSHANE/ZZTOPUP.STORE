document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');

    if (hamburger && navbarNav) {
        hamburger.onclick = () => {
            navbarNav.classList.toggle('active');
        };
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
            }
        });
    } else {
        console.error("Hamburger menu atau navbar tidak ditemukan di DOM.");
    }
});
