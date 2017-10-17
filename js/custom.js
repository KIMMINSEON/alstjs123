$(function () {
   
    //메뉴 클릭
    
    $('#nav_btn').click(function(){
        $(this).toggleClass('on');
        $(this).siblings().toggleClass('on');
        $(this).parent().next().toggleClass('on');
        $(this).children().toggleClass('on');
    });
   
    
});
