exports.consultingList = ()=>{
    const template = `
    <div class="join_box">
        <form action="/consultingJoin" method="post">
            <h4>상담신청 등록</h4>
            <table>
                <thead>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" name="name" required></td>
                    </tr>
                    <tr>
                        <td>신청구분</td>
                        <td>
                            <select name="category" id="category" required>
                                <option value="제품문의">제품문의</option>
                                <option value="서비스문의">서비스문의</option>
                                <option value="구매문의">구매문의</option>
                                <option value="설치문의">설치문의</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>
                            <script>
                                function checkInputNum(){
                                    if ((event.keyCode < 48) || (event.keyCode > 57)){
                                        event.returnValue = false;
                                    }
                                }
                            </script>
                            <input type="text" name="phone" onkeypress="javascript:checkInputNum();" maxlength="4" required> - 
                            <input type="text" name="phone" onkeypress="javascript:checkInputNum();" maxlength="4" required> -
                            <input type="text" name="phone" onkeypress="javascript:checkInputNum();" maxlength="4" required>
                        </td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>
                            <input type="text" name="email">
                        </td>
                    </tr>
                    <tr>
                        <td>문의내용</td>
                        <td><textarea name="text" id="text" cols="30" rows="10"></textarea></td>
                    </tr>
                    <tr>
                        <td>방문구분</td>
                        <td>
                            <input type="text" name="visit">
                        </td>
                    </tr>
                    <tr>
                        <td>진행상태</td>
                        <td>
                            <select name="use" id="use" required>
                                <option value="상담접수">상담접수</option>
                                <option value="배정완료">배정완료</option>
                                <option value="상담완료">상담완료</option>
                                <option value="계약완료">계약완료</option>
                                <option value="상담취소">상담취소</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>상담원</td>
                        <td>
                            <select name="consultant" class="consultant" required>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>배정일</td>
                        <td><input type="date" name="assignment"></td>
                    </tr>
                    <tr>
                        <td>계약일</td>
                        <td><input type="date" name="contract"></td>
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
        <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴 아이콘"> 상담신청 리스트</h3>
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
                        <td>신청구분</td>
                        <td>이름</td>
                        <td>전화번호</td>
                        <td>진행상태</td>
                        <td>상담원</td>
                        <td>배정일</td>
                        <td>계약일</td>
                        <td>방문구분</td>
                        <td>등록일자</td>
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
            <input type="button" value="상담 등록" class="join_btn">
        </div>
        <script src="../public/js/admin/consultingList.js"></script>
    `
    return template;
}