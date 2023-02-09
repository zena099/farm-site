$(function(){
    /* ---------- header ---------- */
    //상단 메뉴 고정
    let $header = $("header"), //header태그에 클래스명 sticky 넣다 뺐다 하기
        $gnbBg = $('.header-top .gnb_bg'),
        $toggle = $(".header-top .container .toggle");

      $(window).scroll(function(){
        $currentSct = $(document).scrollTop(); //스크롤양을 변수에 담기
        //console.log($currentSct)
        if($currentSct >20){
          $header.addClass('sticky');
        }else{ 
          $header.removeClass('sticky');
        }
      });

    //드롭다운 메뉴
    // $('header .nav-li').on('mouseenter',function(){
    //   if($(document).width()>1360){
    //     if($(document).scrollTop()<20 ){
    //       $(this).find('.sub').stop().slideDown(300);
    //     }else{
    //       $('.sub').stop().slideDown(300);
    //       $($gnbBg).stop().slideDown(300);
    //     }
    //   }
    // });
    // $('.nav-li').on('mouseleave',function(){
    //   if($(document).width()>1024 && $(document).scrollTop()<20){
    //     $(this).find('.sub').stop().slideUp(250);
    //   }
    // });
    // $('header .nav-pc>ul').on('mouseleave',function(){
    //   if($(document).scrollTop()>20 ){
    //     $('.sub').stop().slideUp(300);
    //     $($gnbBg).stop().slideUp(300);
    //   }
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

    /* ---------- toggle ---------- */
    $($toggle).click(function(){		
      if($("html").hasClass("on")){
          $("html").removeClass("on");
      }else{
          $("html").addClass("on");
      }
  });



  // $(function(){
  //   $('.accordion .content').eq(0).show()
  //   $('.accordion .title').click(function(){
  //     $(this).siblings('.accordion .content').slideUp()
  //     $(this).next().stop().slideToggle(300)
  //     $(this).toggleClass('active')
  //     $(this).siblings('.accordion .title').removeClass('active')
  //   })
  // })
  // $("html .nav-pc > ul > li > a").click(function(){
  //   t = $(this).parent('li');
  //   if (t.hasClass('active')) {
  //       t.removeClass('active');
  //       t.find('.sub').slideUp('fast');
  //   }else {
  //       $("html.on header .nav-pc li").removeClass('active');
  //       t.addClass('active');
  //       if(t.find('div').hasClass('sub')){
  //           $(".mobile-navigation nav .sub").slideUp('fast');			
  //           t.find('.sub').slideDown('fast');
  //           return false;
  //       }	
  //   }
  // });

  // if($currentSct >20){
  //   $header.hasClass('sticky');
  // }else{ 
  //   $header.removeClass('sticky');
  // }


//   $(".mobile-navigation nav > ul > li > a").click(function(){
//     t = $(this).parent('li');
//     if (t.hasClass('active')) {
//         t.removeClass('active');
//         t.find('.submenu').slideUp('fast');
//     }else {
//         $(".mobile-navigation nav li").removeClass('active');
//         t.addClass('active');
//         if(t.find('div').hasClass('submenu')){
//             $(".mobile-navigation nav .submenu").slideUp('fast');			
//             t.find('.submenu').slideDown('fast');
//             return false;
//         }	
//     }
// });
      
    //Mobile 메뉴
  //   $(".toggle").click(function(){
  //     $(".nav-pc").slideToggle();
  //     $($header).toggleClass("on");
  //     if($("$header").hasClass("sticky")){
  //         $("$header").removeClass("sticky");
  //     }else{
  //         $("$header").addClass("sticky");
  //     }
  // }); 
  
  //사이즈변경시 메뉴
  // $(window).resize(function(){
  //     if($(window).width() > 1360){
  //         //참이면 할일
  //         $("header.on .header-top .nav-pc").show();
  //     } else{
  //         //거짓이면 할일
  //         $("header.on .header-top .nav-pc").hide();
  //     }
  // });				






    /* ---------- banner ---------- */
    $('#banner .slides').bxSlider({
      adaptiveHeight: true,
      auto: true,
      autoControlsSelector: '.bx-start',
      controls: false,
      maxSlides: 1,
      minSlides: 1,
      mode: 'fade',
      pager: false,
      resposive: true,
      tickerHover: true,
      speed:1500,
		  pause:5000,
      onSliderLoad:function(currentIndex){
			// console.log(currentIndex);
			$('#banner .slides li').eq(currentIndex).addClass('active');
		},
		  onSlideAfter:function($slideElement){//활성화된 li에 클래스 active 넣기
			$slideElement.addClass('active').siblings().removeClass('active'); //나머지 li에는 active 제거하기
		} //슬라이드가 이동한 이후에 동작! 현재 슬라이드에 active추가하고 나머지 제거
    });

    /* ---------- service ---------- */
    var serBox = $('.ser-box');
    var servicesOST = serBox.offset().top - 900; //화면 상단에서 떨어진 거리
    /* 윈도우에 스크롤이 생기면 services가 화면 상단에서 떨어진 거리를 활용하여,
    services가 화면에 나타날 시점보다 스크롤을 많이 하면 해당 요소에 active를 추가한다 */
    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop(); //스크롤 양 확인
        //console.log(currentSCT);
        if(currentSCT >= servicesOST){
            serBox.addClass('active');
        }
    });

    /* ---------- notice ---------- */
    $('.slider-wrap').bxSlider({
        controls:true,
        minSlides:1,//슬라이드 개수, 반응형 너비 줄면 슬라이드 개수가 2개로 나타나게 하기
		    maxSlides:3,//슬라이드 개수
		    slideWidth:520,
		    slideMargin:0,
		    moveSlides: 1,//하나씩 움직이게 하기
		    pager:true,
        auto : true,
        speed:1000,
		    pause:3000
    });

     /* ---------- enjoy ---------- */
     let filterBtn = $('.filters button');
     let projectList = $('.enjoy_list li');

     
    filterBtn.click(function(){
      let targetClass = $(this).attr('data-filter');

      projectList.css({transform:'scale(0)'});

       setTimeout(function(){
        projectList.hide();

        $(targetClass).fadeIn(700);
        $(targetClass).css({transform:'scale(1)'});

        if(targetClass == 'all'){
          projectList.fadeIn();
          projectList.css({transform:'scale(1)'});
        }
      },300);

      //버튼 활성화
      filterBtn.removeClass('active');
      $(this).addClass('active');
    }); 
});

