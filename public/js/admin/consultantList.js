//  전역변수

//  ajax 정보

//  데이터 받을 링크
const url = "/consultant_list";
//  데이터의 형태
const dataType = "json";

//  옵션

//  테이블 열의 갯수
const table_colspan = 11;
//  최대로 보여주는 리스트 갯수
const max_list_length = 10;
//  페이징 버튼 갯수
const paging_btn_length = 5;
//  버튼 클릭시 색상
const btn_click_color = "#eeeeee";


//  객체정보

//  페이징 박스
const paging_box = $('.paging_box');
//  prev 버튼
const prev_btn = $(".prev");
//  next 버튼
const next_btn = $('.next');
//  리스트 갯수 표현
const list_length = $('.list_length');
//  데이터를 넣을 공간
const list_object = $(".list_data");
//  검색 버튼
const search_btn = $(".search_btn");
//리셋 버튼
const reset_btn = $(".reset_btn");


//  리스트 불러오는 함수
function template_fc(data,IsBull){
    let template = "";
    list_object.empty();
    //  검색 기능 추가시 기능
    if(data <= 0){
        template = `
        <tr><td colspan="${table_colspan}">검색 결과 없음</td></tr>
        `
        return template;
    }
    if(!IsBull){
        for(let i = 0; i < max_list_length; i++){
            if(i >= data.length){
                continue;
            }else{
                template += `
                <tr>
                <td><input type="checkbox" value="${data[i].No}" class="check_list"></td>
                <td>${data[i].No}</td>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].cellphone}</td>
                <td>${data[i].email}</td>
                <td>${data[i].use}</td>
                <td>${data[i].insert_date}</td>
                <td>${data[i].login_count}</td>
                <td>${data[i].last_login}</td>
                </tr>
                `
            }
        }
    }else{
        for(let i = 0; i < data.length; i++){
            if(i >= data.length){
                continue;
            }else{
                template += `
                <tr>
                <td><input type="checkbox" value="${data[i].No}" class="check_list"></td>
                <td>${data[i].No}</td>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
                <td>${data[i].phone}</td>
                <td>${data[i].cellphone}</td>
                <td>${data[i].email}</td>
                <td>${data[i].use}</td>
                <td>${data[i].insert_date}</td>
                <td>${data[i].login_count}</td>
                <td>${data[i].last_login}</td>
                </tr>
                `
            }
        }
    }
    return template;
}

//  리스트 초기화 함수
function list_reset(data,page){
    list_object.empty();
    let template = "";
    for(let i = (page -1) * max_list_length; i < max_list_length * page; i++){
        if(data[i] == undefined){
            continue;
        }else{
            template += `
            <tr>
            <td><input type="checkbox" value="${data[i].No}" class="check_list"></td>
            <td>${data[i].No}</td>
            <td>${data[i].id}</td>
            <td>${data[i].name}</td>
            <td>${data[i].phone}</td>
            <td>${data[i].cellphone}</td>
            <td>${data[i].email}</td>
            <td>${data[i].use}</td>
            <td>${data[i].insert_date}</td>
            <td>${data[i].login_count}</td>
            <td>${data[i].last_login}</td>
            </tr>
            `
        }
    }
    list_object.append(template);
}

//  페이징 버튼 생성 함수
function paging_btn_create(data,page){
    let template = "";
    let max_list = 0;
    if(page <= 1){
        page = 0;
    }
    for(let i = page; i < (data.length / max_list_length); i++){
        max_list++;
        if(max_list <= paging_btn_length){
            template += `
            <span class="paging_btn" value="${i+1}">${i+1}</span>
            `
        }
    }
    prev_btn.after(template);
}

//  ajax로 리스트 가져오는 함수
function list_data(){
    $.ajax({
        url:url,
        dataType:dataType,
        success:function(data){
            let $list_object = list_object;
            if(data.length <= 0){
                template = `
                    <tr>
                        <td colspan="${table_colspan}">계정 없음</td>
                    </tr>
                `
            }else{
                list_length.text(`전체 : ${data.length} 건 조회`);
                paging_btn_create(data,0);
                $list_object.append(template_fc(data,false));
                
                let $paging_btn = $(".paging_btn");
                $paging_btn.eq(0).css("backgroundColor",btn_click_color);

                prev_btn.on("click", function(){
                    $paging_btn = $(".paging_btn");
                    let paging_btn_val = Number($paging_btn.first().attr('value'));
                    if(paging_btn_val <= 1 || paging_btn_val - paging_btn_length < 1){
                        return;
                    }else{
                        $paging_btn.remove();
                        paging_btn_create(data, paging_btn_val - paging_btn_length - 1);
                        list_reset(data,paging_btn_val - paging_btn_length);
                        $(`.paging_btn[value=${paging_btn_val - paging_btn_length}]`).css("backgroundColor",btn_click_color);
                    }
                });

                next_btn.on("click", function(){
                    $paging_btn = $(".paging_btn");
                    let paging_btn_val = Number($paging_btn.last().attr('value'));
                    if(paging_btn_val >= data.length / max_list_length){
                        return;
                    }else{
                        $paging_btn.remove();
                        paging_btn_create(data,paging_btn_val);
                        list_reset(data,paging_btn_val+1);
                        $(`.paging_btn[value=${paging_btn_val+1}]`).css("backgroundColor",btn_click_color);
                    }
                });

                paging_box.on("mouseover", function(){
                    let $paging_btn = $(".paging_btn");
                    $paging_btn.each(function(){
                        $(this).on("click", function(){
                            $paging_btn.removeAttr("style");
                            page = $(this).attr("value");
                            $(this).css({"backgroundColor":btn_click_color,"transitionDuration":"0.3s"});
                            list_reset(data,page);
                        });
                    });
                });


                function title_search(data,title,kinds){
                    let search_result = [];
                    if(kinds == "id"){
                        for(let i = 0; i < data.length; i++){
                            if(title == data[i].id){
                                search_result.push(data[i]);
                            }
                        }
                        return search_result;
                    }else if(kinds == "name"){
                        for(let i = 0; i < data.length; i++){
                            if(title == data[i].name){
                                search_result.push(data[i]);
                            }
                        }
                        return search_result;
                    }else{
                        return 0;
                    }
                }
                
                function search_click(){
                    //  검색 종류 선택 값
                    const select_value = $(".title");
                    //  검색 한 값
                    const text_value = $(".text");

                    if(text_value.val() == ""){
                            paging_box.css("display","inline-block");
                            list_object.append(template_fc(data,false));
                            list_length.text(`전체 : ${data.length} 건 조회`);
                    }else{
                        const search_value = title_search(data,text_value.val(),select_value.val());
                        if(select_value.val() == "choice"){
                            alert("검색항목을 선택해주세요.");
                        }else if(select_value.val() == "id"){
                            paging_box.css("display","none");
                            list_object.append(                            template_fc(search_value,true));
                            list_length.text(`전체 : ${search_value.length} 건 조회`);
                    }else if(select_value.val() == "name"){
                            paging_box.css("display","none");
                            list_object.append(                            template_fc(search_value,true));
                            list_length.text(`전체 : ${search_value.length} 건 조회`);
                        }
                    }
                }
                search_btn.on("click",search_click);

                reset_btn.on("click",function(){
                    paging_box.css("display","inline-block");
                    list_object.append(template_fc(data,false));
                });

                //  검색안에서 엔터 이벤트
                $(".text").on("keydown", function(e){
                    if(e.keyCode == 13){
                        if($(".text").val() == ""){
                            paging_box.css("display","inline-block");
                            list_object.append(template_fc(data,false));
                        }else{
                            search_click();
                        }
                    }
                });
            }
        }
    });
}
    //  삭제시 json파일 전송 경로
    const ajax_delete_url = "/consultant_delete_list";
    //  데이터 타입
    const ajax_delete_datatype = "json";
    //  url방식
    const ajax_delete_type = "post";
    //  delete 버튼
    const list_delete_btn = $('.delete_btn');
    //  join 버튼
    const admin_join_btn = $(".join_btn");
    //  all_check 버튼
    const all_check = $('.all_check');
    //  check 버튼 리스트

    //  delete 버튼 클릭함수
    function delete_btn_click(){
        let IsBull = confirm("정말로 삭제하시겠습니까?");
        if(IsBull){

            let check_list = $(".check_list");
            let array_result = new Array();
            let check_list_cnt = 1;
            for(let i = 0; i < check_list.length; i++){
                if(check_list.eq(i).is(":checked")){
                    let check_list_checked = {id:check_list_cnt,value:Number(check_list.eq(i).attr("value"))};
                    check_list_cnt++;
                    array_result.push(check_list_checked);
                }
            }
            
            $.ajax({
                url:ajax_delete_url,
                dataType:ajax_delete_datatype,
                type:ajax_delete_type,
                data:array_result
            });
            alert("삭제되었습니다.");
            location.reload();
        }else{
            alert("취소되었습니다.");
        }

    }


$(function(){

    list_data();
    list_delete_btn.on("click",delete_btn_click);

    //  전체 체크버튼 이벤트
    all_check.on("click", function(){
        let check_list  = $('.check_list');
        if(all_check.is(":checked")){
            check_list.prop('checked',true);
        }else if(!all_check.is(":checked")){
            check_list.prop('checked',false);
        }
    });

    //  등록버튼
    const join_btn = $(".join_btn");
    //  취소버튼
    const form_close_btn = $(".form_close_btn");
    //  등록 폼
    const join_box = $(".join_box");

    //  등록버튼 이벤트
    join_btn.on("click", function(){
        join_box.fadeIn();
    });

    //  취소버튼 이벤트
    form_close_btn.on("click", function(){
        join_box.fadeOut();
    });

});