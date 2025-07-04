document.addEventListener('DOMContentLoaded', function() {
    const authElement = document.getElementById('auth');
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');

    if (isLoggedIn) {
        authElement.innerHTML = '<a href="#" id="logout">logout</a>';
        document.getElementById('logout').addEventListener('click', function() {
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = 'login.html';
        });
    }
});
