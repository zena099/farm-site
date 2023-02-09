$(function(){
 /* ------------ header -------------- */
    //상단 메뉴 고정
    let $header = $('header'), //header태그에 클래스명 sticky 넣다 뺐다 하기
        $gnbBg = $('.header-top .gnb_bg');

    $(window).scroll(function(){
      let $currentSct = $(document).scrollTop(); //스크롤양을 변수에 담기
      //console.log($currentSct)
      if($currentSct >20){
        $header.addClass('sticky');
      }else{ 
        $header.removeClass('sticky');
      }
    });

    //드롭다운 메뉴
    $('header .nav-li').on('mouseenter',function(){
      if($(document).width()>1024){
        if($(document).scrollTop()<20 ){
          $(this).find('.sub').stop().slideDown(300);
        }else{
          $('.sub').stop().slideDown(300);
          $($gnbBg).stop().slideDown(300);
        }
      }
    });
    $('.nav-li').on('mouseleave',function(){
      if($(document).width()>1024 && $(document).scrollTop()<20){
        $(this).find('.sub').stop().slideUp(250);
      }
    });
    $('header .nav-pc>ul').on('mouseleave',function(){
      if($(document).scrollTop()>20 ){
        $('.sub').stop().slideUp(300);
        $($gnbBg).stop().slideUp(300);
      }
    });

    //언어선택
    $(".gnb .g-w").click(function(){	
      if($(this).find('.depth').hasClass("active")){
        $('.depth').removeClass("active");
      }else{			
        $('.depth').addClass("active"); 
      }
      return false;
    });

    $(window).scroll(function(){
      let $scrollData = $('.enjoy-bg-box'),
          $elemTop = $($scrollData).offset().top; //요소의 offset().top 값 받아서 변수 설정

          let moveTrue = window.scrollY / $elemTop;
          if(moveTrue<1){
              $($scrollData).css({top:moveTrue * -300});
          }
  
      });

          console.log('scroll 값 : ' + window.scrollY);
          console.log('요소의 top 값: ' + $elemTop);
});