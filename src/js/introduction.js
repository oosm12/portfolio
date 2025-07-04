document.addEventListener('DOMContentLoaded', () => {
    // 로그아웃 기능 추가
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
});
