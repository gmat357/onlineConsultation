exports.nav = ()=>{
    const template = `
    <nav class="nav_container">
        <ul>
            <li>
                <img src="../public/img/admin/nav/bottom_arrow.png" alt="화살표 아이콘"> 로그인현황
                <ul>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/adminLoginList">관리자로그인현황</a>
                    </li>
                </ul>
            </li>
            <li>
                    <img src="../public/img/admin/nav/bottom_arrow.png" alt="화살표 아이콘"> 사이트기본설정
                    <ul>
                        <li>
                            <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/">사이트 환경설정</a>
                        </li>
                        <li>
                            <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/">팝업관리</a>
                        </li>
                        <li>
                            <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/">상단 팝업관리</a>
                    </li>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/adminList">관리자 리스트</a>
                    </li>
                </ul>
            </li>
            <li>
                <img src="../public/img/admin/nav/bottom_arrow.png" alt="화살표 아이콘"> 상담원관리
                <ul>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/consultantList">상담원 리스트</a>
                    </li>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/consultantLoginList">상담원 로그인 현황</a>
                    </li>
                </ul>
            </li>
            <li>
                <img src="../public/img/admin/nav/bottom_arrow.png" alt="화살표 아이콘"> 상담신청관리
                <ul>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/consultingList">상담신청 리스트</a>
                    </li>
                </ul>
            </li>
            <li>
                <img src="../public/img/admin/nav/bottom_arrow.png" alt="화살표 아이콘"> 내정보관리
                <ul>
                    <li>
                        <img src="../public/img/admin/nav/right_arrow.png" alt="화살표아이콘"> <a href="/">내정보 관리</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>  
        <script src="../public/js/admin/nav.js"></script>
    `

    return template;
}