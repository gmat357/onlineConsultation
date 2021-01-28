exports.header = (username)=>{

    const template = `
    <header class="header_container">
        <div class="logo">
            <a href="/admin">온라인 상담관리 관리자</a>
        </div>
        <ul class="user_info">
            <li>방문횟수 : 5</li>
            <li>오늘 : 2</li>
            <li>${username}님 로그인</li>
            <li><a href="/">홈페이지 바로가기</a></li>
            <li><a href="/admin/logout">Logout</a></li>
        </ul>
    </header>
    `

    return template;
}