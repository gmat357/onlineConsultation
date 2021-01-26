exports.consultantList = ()=>{
    const template = `
    <div class="join_box">
        <form action="/consultantJoin" method="post">
            <h4>상담원 등록</h4>
            <table>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" name="id" required></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name" required></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" name="psw" required></td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>
                            <input type="text" name="phone" required> - 
                            <input type="text" name="phone" required> -
                            <input type="text" name="phone" required>
                        </td>
                    </tr>
                    <tr>
                        <td>휴대폰번호</td>
                        <td>
                            <input type="text" name="cellphone" required> - 
                            <input type="text" name="cellphone" required> -
                            <input type="text" name="cellphone" required>
                        </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>
                            <input type="text" name="email" required>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="2"><input type="button" class="form_close_btn" value="닫기"><input type="submit" value="등록"></td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    <article class="content_container">
        <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴 아이콘"> 상담원 리스트</h3>
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
                <span class="list_length"></span>
                <input type="button" value="초기화" class="reset_btn">
                <input type="button" value="조건 검색" class="search_btn">
            </div>
        </div>
        <div class="long_table_box">
            <table>
                <thead>
                    <tr>
                        <td><input type="checkbox" class="all_check"></td>
                        <td>순번</td>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>전화번호</td>
                        <td>휴대폰번호</td>
                        <td>이메일</td>
                        <td>사용여부</td>
                        <td>등록일</td>
                        <td>로그인횟수</td>
                        <td>최종로그인</td>
                    </tr>
                </thead>
                <tbody class="list_data">
                </tbody>
            </table>
            <div class="paging_box">
                <span class="prev"><img src="../public/img/admin/paging/paging_left.png" alt="왼쪽 화살표"></span>
                <span class="next"><img src="../public/img/admin/paging/paging_right.png" alt="오른쪽 화살표"></span>
            </div>
            <input type="button" value="선택건 삭제" class="delete_btn">
            <input type="button" value="상담원 등록" class="join_btn">
        </div>
        <script src="../public/js/admin/consultantList.js"></script>
    `

    return template;
}