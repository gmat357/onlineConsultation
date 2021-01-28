exports.content = ()=>{
    const template = `
    <article class="content_container">
        <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴아이콘"/>최근 등록 현황</h3>
        <div class="long_table_box">
            <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴아이콘">상담원 등록 현황</h3>
            <table>
                <thead>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>전화번호</td>
                        <td>핸드폰번호</td>
                        <td>이메일</td>
                        <td>사용여부</td>
                        <td>배정순서</td>
                        <td>등록일자</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>gmat357</td>
                        <td>김우진</td>
                        <td>010-6414-7937</td>
                        <td>010-6414-7937</td>
                        <td>gmas357@nate.com</td>
                        <td>사용</td>
                        <td>1</td>
                        <td>2021-01-15 16:55:12</td>
                    </tr>
                </tbody>
            </table>
        </div> <!-- 상담원 등록 현황 -->

        <div class="long_table_box">
            <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴아이콘">상담신청 접수 현황</h3>
            <table>
                <thead>
                    <tr>
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
                <tbody>
                    <tr>
                        <td>gmat357</td>
                        <td>김우진</td>
                        <td>010-6414-7937</td>
                        <td>010-6414-7937</td>
                        <td>gmas357@nate.com</td>
                        <td>사용</td>
                        <td>1</td>
                        <td>2021-01-15 16:55:12</td>
                        <td>2021-01-15 16:55:12</td>
                    </tr>
                </tbody>
            </table>
        </div> <!-- 상담신청 접수 현황 -->

        <div class="short_table_box first_short">
            <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴아이콘">공지사항 등록 현황</h3>
            <table>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작설일</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>테스트중입니다.</td>
                        <td>김우진</td>
                        <td>2021-01-15</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div> <!-- 공지사항 등록 현황 -->

        <div class="short_table_box">
            <h3 class="title_text"><img src="../public/img/admin/main/hb_silver.png" alt="메뉴아이콘">문의 게시판 등록 현황</h3>
            <table>
                <thead>
                    <tr>
                        <td>제목</td>
                        <td>작성자</td>
                        <td>작설일</td>
                        <td>조회수</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>테스트중입니다.</td>
                        <td>김우진</td>
                        <td>2021-01-15</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div> <!-- 문의 게시판 등록 현황 -->
    `

    return template;
}