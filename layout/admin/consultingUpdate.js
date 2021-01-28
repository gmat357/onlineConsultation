exports.content = (rows, consultantData)=>{

    let consultant_result = "";
    for(let i = 0; i < consultantData.length; i++){
        consultant_result += `<option value="${consultantData[i].name}">${consultantData[i].name}</option>`
    }

    const template = `
    <article class="content_container">
        <div class="form_box">
            <form action="/consultingList/updateAction/${rows[0].No}" method="post">
                <h4>상담신청 조회</h4>
                <table>
                    <thead>
                        <tr>
                            <td>이름</td>
                            <td><input type="text" name="name" value="${rows[0].name}"></td>
                            <td>전화번호</td>
                            <td><input type="text" name="cellphone" value="${rows[0].cellphone}"></td>
                        </tr>
                        <tr>
                            <td>신청구분</td>
                            <td colspan="3">
                                <select name="category" id="category">
                                    <option value="제품문의">제품문의</option>
                                    <option value="서비스문의">서비스문의</option>
                                    <option value="구매문의">구매문의</option>
                                    <option value="설치문의">설치문의</option>
                                </select>
                            </td>
                            <script>
                                $(function(){
                                    const category = $(#category > option[value="${rows[0].category}"]).prop("selected", true);
                                });
                            </script>
                        </tr>
                        <tr>
                            <td>문의내용</td>
                            <td colspan="3">
                                <textarea name="text" id="text" cols="30" rows="10">
                                    ${rows[0].text}
                                </textarea>
                            </td>
                        </tr>
                        <tr>
                            <td>진행상태</td>
                            <td>
                                <select name="use" id="use">
                                    <option value="상담접수">상담접수</option>
                                    <option value="배정완료">배정완료</option>
                                    <option value="상담완료">상담완료</option>
                                    <option value="계약완료">계약완료</option>
                                    <option value="상담취소">상담취소</option>
                                </select>
                                <script>
                                    $(function(){
                                        const use = $(#use > option[value="${rows[0].use}"]).prop("selected", true);
                                    });
                                </script>
                            </td>
                            <td>상담원</td>
                            <td>
                                <select name="consultant" id="consultant">
                                    ${consultant_result}
                                </select>
                                <script>
                                    $(function(){
                                        const consultant = $(#consultant > option[value="${rows[0].use}"]).prop("selected", true);
                                    });
                                </script>
                            </td>
                        </tr>
                        <tr>
                            <td>배정일</td>
                            <td><input type="date" value="${rows[0].assignment}"></td>
                            <td>계약일</td>
                            <td><input type="date" value="${rows[0].contract}"></td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td colspan="2">등록일자</td>
                            <td colspan="2">${rows[0].insert_date}</td>
                        </tr>
                    </thead>
                </table>
                <div class="btn_box">
                    <a href="/admin">닫기</a>
                    <input type="submit" value="수정"/> 
                    <a href="/consultingList/delete/${rows[0].No}">삭제</a>
                </div>
            </form>
        </div>
    `

    return template;
}