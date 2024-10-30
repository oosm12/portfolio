document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.querySelector('.next-button');
    
    nextButton.addEventListener('click', () => {
        // 여기에 다음 페이지로 이동하는 로직을 추가하세요.
        alert('Next button clicked');
    });

    // 로그아웃 기능 추가
    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        window.location.href = 'login.html';
    });
});
