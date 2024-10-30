document.addEventListener('DOMContentLoaded', () => {
    // 로그아웃 버튼
    const logoutButton = document.getElementById('logout');

    // 로그아웃 버튼 클릭 이벤트
    logoutButton.addEventListener('click', function () {
        // 로컬 스토리지에서 로그인 상태 제거
        localStorage.removeItem('isLoggedIn');
        // 로그인 페이지로 이동
        window.location.href = 'login.html';
    });

    // 페이지 로드 시 로그인 상태 확인
    if (!localStorage.getItem('isLoggedIn')) {
        // 로그인 상태가 아닌 경우 로그인 페이지로 이동
        window.location.href = 'login.html';
    }
});
