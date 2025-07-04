document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // 여기에서 아이디와 비밀번호를 검증합니다.
        if (username === '20212001' && password === '021220') {
            // 로그인 성공 시 로컬 스토리지에 로그인 상태 저장
            localStorage.setItem('isLoggedIn', 'true');
            // home.html로 이동
            window.location.href = '../home/home.html';
        } else {
            // 로그인 실패 시 경고 메시지를 표시합니다.
            alert('아이디와 비밀번호가 올바르지 않습니다.');
        }
    });
});
