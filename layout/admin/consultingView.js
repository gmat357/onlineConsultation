exports.consultingView = (rows)=>{
    const template = `
    <article class="content_container">
        <div class="form_box">
            <form action="">
                <h4>상담신청 조회</h4>
                <table>
                    <thead>
                        <tr>
                            <td>이름</td>
                            <td>${rows[0].name}</td>
                            <td>전화번호</td>
                            <td>${rows[0].cellphone}</td>
                        </tr>
                        <tr>
                            <td>신청구분</td>
                            <td colspan="3">${rows[0].category}</td>
                        </tr>
                        <tr>
                            <td>문의내용</td>
                            <td colspan="3">${rows[0].text}</td>
                        </tr>
                        <tr>
                            <td>진행상태</td>
                            <td>${rows[0].use}</td>
                            <td>상담원</td>
                            <td>${rows[0].consultant}</td>
                        </tr>
                        <tr>
                            <td>배정일</td>
                            <td>${rows[0].assignment}</td>
                            <td>계약일</td>
                            <td>${rows[0].contract}</td>
                        </tr>
                        <tr>
                            <td>방문구분</td>
                            <td colspan="3">${rows[0].visit}</td>
                        </tr>
                        <tr>
                            <td colspan="3">등록일자</td>
                            <td>${rows[0].insert_date}</td>
                        </tr>
                    </thead>
                </table>
                <div class="btn_box">
                    <a href="/admin">닫기</a>
                    <a href="/consultingList/update/${rows[0].No}">수정</a>
                    <a href="/consultingList/delete/${rows[0].No}">삭제</a>
                </div>
            </form>
        </div>
    `
    return template;
}