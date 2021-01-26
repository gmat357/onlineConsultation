exports.adminLoginList = ()=>{
    const template = `
    <article class="content_container">
        <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴 아이콘"> 관리자 로그인 리스트</h3>
        <div class="login_list_box">
            <div class="search_box">
                <table>
                    <thead>
                        <tr>
                            <td>검색</td>
                            <td>
                                <select name="title" class="title">
                                    <option value="choice">검색항목선택</option>
                                    <option value="id">아이디</option>
                                    <option value="name">이름</option>
                                </select>
                                <input type="text" name="text" class="text">
                            </td>
                        </tr>
                    </thead>
                </table>
                <span class="list_length">전체 : 0 건 조회</span>
                <input type="button" value="초기화" class="reset_btn">
                <input type="button" value="조건 검색" class="search_btn">
            </div>
        </div>
        <div class="long_table_box">
            <table>
                <thead>
                    <tr>
                        <td>순번</td>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>접속일자</td>
                        <td>접속IP</td>
                    </tr>
                </thead>
                <tbody class="list_data">
                </tbody>
            </table>
            <div class="paging_box">
                <span class="prev"><img src="../public/img/admin/paging/paging_left.png" alt="왼쪽 화살표"></span>
                <span class="next"><img src="../public/img/admin/paging/paging_right.png" alt="오른쪽 화살표"></span>
            </div>
        </div>
        <script src="../public/js/admin/adminLoginList.js"></script>
    `
    return template;
}