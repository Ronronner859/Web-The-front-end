$(function () {
    $(window).on('scroll',function () {
        if($(window).scrollTop()>100){
            $('.three_icon').css('visibility','visible');
        }else{
            $('.three_icon').css('visibility','hidden');
        }
    });
    $('.three_icon').on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },200)
    });

    $('#down').click(function (){
        $('.list').toggle()
    });
   $('.login_button').click(function() {
       $('.mask').toggle()
   }).on('click',function () {
       $('.login_Input').toggle()
   });
    $('.login_close').click(function () {
        $('.mask').toggle()
    }).on('click',function () {
        $('.login_Input').toggle()
    });
   $('.img_input').click(function () {
       $('.img_close').toggle(50)
   })

});
