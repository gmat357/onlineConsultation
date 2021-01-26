$(function(){
    const $menu_list = $(".nav_container > ul > li");
    const $subMenu_list = $(".nav_container > ul > li > ul");
    $menu_list.each(function(){
        $(this).on("click",function(){
            $subMenu_list.slideUp();
            if($(this).children("ul").css("display") == "none")
                $(this).children("ul").slideDown(500);
            else
                $(this).children("ul").slideUp(1000);
        });
    });
});