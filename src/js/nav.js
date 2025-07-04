document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    const page = path.split("/").pop().split(".")[0];

    document.querySelectorAll('nav ul li a').forEach(link => {
        if (link.getAttribute('href').includes(page)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
