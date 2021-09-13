
function responsivePage() {
	var windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    $(".solution_tab .right").css("height",$(".solution_tab .right>img").height()+"px")
	
    if (windowWidth > 1000) {
      //피시 메뉴
      $("header").removeClass("mo").addClass("pc");
      $(window).scroll(function(){
        var scr = $(this).scrollTop();
        if(scr >= 100){
          $("header.pc").find(".header").addClass("down")
        }
        else{
          $("header.pc").find(".header").removeClass("down")
        }
      })

    } else{
      //모바일
      $("header").removeClass("pc").addClass("mo");
      $("header.mo .mo_top .open").click(function(){
        $(this).parent().siblings(".header").css("left","0");
        $(".cover").addClass("active");
      });
      $("header.mo .header .close").click(function(){
        $("header.mo .header").css("left","-100%");
        $(".cover").removeClass("active");
      });
      

      $(window).scroll(function(){
        var scr2 = $(this).scrollTop();
        if(scr2 >= 100){
          $("header.mo").find(".mo_top").addClass("down")
        }
        else{
          $("header.mo").find(".mo_top").removeClass("down")
        }
      });
      $(".introduce_tab").css("padding-top",$(".introduce_tab>img").height()+"px")
    }
}
$(function () {
  responsivePage();
  $(window).resize(function () {
    responsivePage();
  });
  
  $(".main1").css("height",$(window).height()+"px")
  

  $(".cover").click(function(){
    $("header.mo .header").css("left","-100%");
    $(".cover").removeClass("active");
  });
  // LNB
// var compLnb = (function(){
//   if($(".left_menu").length < 1) return false;
  
//   var lnb = $(".left_menu .menu h2 a"), spd=300;
   
//   lnb.on("click", function(){
//     var $this = $(this), 
//        sm = $this.closest("h2").next(".smallmenu"), 
//        lnb = $(".left_menu .menu");

//     if($this.hasClass('outlnk')) return;
//     if($this.hasClass('single')) return;

//     $this.closest("li").siblings().find(".open").removeClass("open");
//     $this.closest("li").siblings().find(".smallmenu").slideUp(spd);

//     sm.stop().slideToggle(spd);
//     $this.toggleClass("open");

//     return false;
//   })
// })();

//탭 나누기
  var tab_len = $(".com_tab>li").length;
  $(".com_tab>li").css("width","calc(100% / "+tab_len+")");

  // 맨위로 가기
  $(".btn-gototop").click(function () {
    $('body,html').animate({
      'scrollTop': 0
    }, 300, 'swing', function () {});
  });

  // 탭 설정및 웹접근성반영
  $(".com_tab>li").on("keydown", function (event) {
    event = event || window.event;
    var keycode = event.keyCode || event.which;
    switch (keycode) {
      case 13: // Enter
        // 선택된 탭 활성화
        $(this)
          .addClass("active")
          .attr("aria-selected", "true")
          // 기존 탭 비활성화
          .siblings()
          .removeClass("active")
          .attr("aria-selected", "false");
        // 연관된 탭 패널 활성화
        $("#" + $(this).attr("aria-controls"))
          .addClass("active")
          // 기존 탭 패널 비활성화
          .siblings(".tabpanel")
          .removeClass("active");
        break;
    }
  });

  $(".com_tab li").on("mousedown", function () {
    // 선택된 탭 활성화
    $(this)
      .addClass("active")
      .attr({
        "aria-selected": "true"
      })
      .focus()
      // 기존 탭 비활성화
      .siblings()
      .removeClass("active")
      .attr({
        "aria-selected": "false"
      });
    // 연관된 탭 패널 활성화
    $("#" + $(this).attr("aria-controls"))
      .addClass("active")
      // 기존 탭 패널 비활성화
      .siblings(".tabpanel")
      .removeClass("active");
  });

  // $("footer .slide").slick({
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow: 5,
  //   arrows: false,
  //   dots: true,
        // prevArrow : $('.banner .btn .prev'), 
        // nextArrow : $('.banner .btn .next'),
  // //   responsive:[
  // //     {
  // //         breakpoint:1100,
  // //         settings :{
  // //           slidesToShow: 4,
  // //           infinite:true,
  // //         }
  // //       },
  // //       {
  // //           breakpoint:501,
  // //           settings :{
  // //             slidesToShow: 2,
  // //             infinite:true,
  // //           }
  // //         }
  // //     ]
  // // });
  
  // $('.banner .btn .pause').click(function() {
  //   $('.banner .slide').slick('slickPause');
  //   $(this).css("display","none");
  //   $('.banner .btn .play').css("display","inline-block");
  // });
  // $('.banner .btn .play').click(function() {
  //   $('.banner .slide').slick('slickPlay');
  //   $(this).css("display","none");
  //   $('.banner .btn .pause').css("display","inline-block");
  // });

  $(".main5 .fullscr p").click(function(){
    $(".main5 .fullscr div").css("display","block");
    $(".main5 .fullscr div video").get(0).play();
  });
  $(".main5 .fullscr div .close").click(function(){
    $(".main5 .fullscr div").css("display","none");
    $(".main5 .fullscr div video").get(0).pause();
    $(".main5 .fullscr div video")[0].currentTime = 0;;
  });

  $(".sub_fsc button").click(function(){
    $(".sub_fsc>div").css("display","block");
    $(".sub_fsc>div iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
  });
  $(".sub_fsc>div .close").click(function(){
    $(".sub_fsc>div").css("display","none");
    $(".sub_fsc>div iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  });

  $(".solution_tab .left ul li").click(function(){
    $(".solution_tab .left ul li").removeClass("active");
    $(this).addClass("active");
    $(".solution_tab .right>img").eq($(this).index()).css({"right":"0","z-index":"4","transition":""})
    setTimeout(function() {
      $(".solution_tab .right>img").css({"right":"-100%","z-index":"5","transition":"none"})
      $(".solution_tab .right>img").eq($(".solution_tab .left ul li.active").index()).css({"right":"0","z-index":"1"})
    }, 500);
  });

  $(".introduce_tab ul li").click(function(){
    $(".introduce_tab ul li").removeClass("active");
    $(this).addClass("active");
    $(".introduce_tab ul li div").stop().slideUp();
    $(this).find("div").stop().slideDown();
    $(".introduce_tab>img").eq($(this).index()).css({"left":"0","z-index":"4","transition":""})
    setTimeout(function() {
      $(".introduce_tab>img").css({"left":"-100%","z-index":"5","transition":"none"})
      $(".introduce_tab>img").eq($(".introduce_tab ul li.active").index()).css({"left":"0","z-index":"1"})
    }, 500);
  });

  $(".so_tab li").click(function(){
    $(".so_tab li").removeClass("active");
    $(this).addClass("active");
    $(".so_tab>div img").removeClass("active");
    $(".so_tab>div img").eq($(".so_tab li.active").index()).addClass("active");
  });

});
$(document).ready(function(){
  var moveType = 0; 
  var moveSpeed = 4500; 
  var moveWork = false; 
  var movePause = false; 

  function tkSlide(){		
    var $tkSlide = $('#tickerSlide'),
      $tkSlidePos = $('#tickerSlide').css('left').replace(/[^-\d\.]/g, ''),
      $tkWidth = $('#tickerSlide').width(),
      $tklength = $('#tickerSlide li').length,
      $tkSlideW = $tkWidth + 400,
      $tkitemW = $('#tickerSlide li').width(),
      $tkitemFirst = $('#tickerSlide li:first-child');

    $tkSlide.css({
      'left' : $tkSlidePos,
      'width' : $tkWidth + $tkitemW
    });
    if(moveWork==false){
      if(moveType==0){
        $tkSlide.css('left' ,$tkSlidePos);
        $tkSlide.animate({left : -$tkitemW},{duration:moveSpeed, easing:"linear", step:function(){
          if(movePause==true){ 
            $tkSlide.stop();
           }
        }, complete:function(){
          $tkSlide.append("<li>" + $('#tickerSlide li:first-child').html() + "</li>");
          $('#tickerSlide li:first-child').remove(); 
          $tkSlide.css('left' ,'0');
          tkSlide();
        }});
      }
    }
  }
  $('#tickerSlide').parent().on("mouseenter", function(){
    movePause=true;
  });
  $('#tickerSlide').parent().on("mouseleave", function(){
    movePause=false;
    tkSlide();
  });
  $('.slideWrap >a.bxBtn').on('click', function(){
    var $thisClass = $(this).hasClass("bx-prev");

    if($thisClass){
      for(var i=0;i<5;i++){				
        var $tkSlide = $('#tickerSlide'),				
        $tkitem = $('#tickerSlide li:last-child()').html();

        $('#tickerSlide li:first-child()').before("<li>" + $tkitem + "</li>");
        $('#tickerSlide li:last-child()').remove();
      }
      $tkSlide.animate({left : 200}, 500, function(){
        $tkSlide.css('left' ,'0');	
      });
    } else {
      for(var i=0;i<5;i++){				
        var $tkSlide = $('#tickerSlide'),				
        $tkitem = $('#tickerSlide li:nth-child(1)').html();

        $tkSlide.append("<li>" + $tkitem + "</li>");
        $('#tickerSlide li:nth-child(1)').remove();
      }
      $tkSlide.animate({left : -200}, 500, function(){
        $tkSlide.css('left' ,'0');	
      });
      
    }
  });
  tkSlide();
});