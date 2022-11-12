$(function () {
    // 侧栏出现和消失
      'use strict';
       var silder = $('#silder'),
           mask = $('.mask'),
       silder_bar = $('#silder_bar');
  
      function showSilder() {
          // console.log(666)
          mask.fadeIn();
          silder.css('right',0)
      }
      function hideSilder() {
          // console.log(666)
          mask.fadeOut();
          silder.css('right',-silder.width())
  
      }
   silder_bar.on('click',showSilder);
   mask.on('click',hideSilder);
      // 返回顶部
      var top = $('.top')
      top.on('click',function () {
          // console.log(666)
          $('body,html').animate({
              scrollTop:0
          },300)
  
      });
   /*  显示小火箭第一种写法
      $(window).on('scroll',function () {
  
              if($(window).scrollTop()>$(window).height()){
  
               top.fadeIn()
          }else{
              top.fadeOut()
          }
  
      });
      $(window).trigger('scroll')
  显示小火箭第二种写法   要先在.top 中写上dispaly  none*/
  
      $(window).on('scroll',function () {
  
          if($(window).scrollTop()<100){
              top.css('display','none')
          }else{
              top.css('display','block')
          }
  
  
      });
  
  //点击首页  天页 地页  切换
          $('.nav_ul li').click(function () {
              $(this).addClass('active')
              $(this).siblings().removeClass('active')
          })
  
  
  });