$(document).ready(function(){


  //접기/펼치기
$(".btn").click(function(e){
    e.preventDefault();
    $(".nav").slideToggle();
    $(".btn").toggleClass("open");
    if($(".btn").hasClass("open")){
        //open이 있을 때
        $(".btn").find(">i").attr("class","fa fa-angle-up");
    } else {
        //open이 없을 때
        $(".btn").find(">i").attr("class","fa fa-angle-down");
    }
});
// $(window).resize(function(){
//   var width = $(window).width();
//   if (width > 600){
//     $('.nav').removeAttr('style');
//   }
// })
$(window).resize(function(){
  var wWidth = $(window).width();
  if(wWidth < 600){
      $(".nav").removeAttr("style");
  }
});

  //이미지 슬라이더
  $(".slider").slick({
  dots: true,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
      {
          breakpoint: 768,
          settings: {
              autoplay: false,
              }
      }
  ]
});

//sns 공유하기
  //http://www.facebook.com/sharer.php?u={페이지 제목}&t={페이지링크}
  //http://twitter.com/intent/tweet?text={페이지 제목}&url={페이지링크}
  //https://share.naver.com/web/shareView.nhn?url={페이지링크}&title={페이지 제목}
  //https://plus.google.com/share?url={페이지링크}&t={페이지 제목}
  $(".facebook").click(function(e){
      e.preventDefault();
      window.open('https://www.facebook.com/sharer/sharer.php?u=' +encodeURIComponent(document.URL)+'&t='+encodeURIComponent(document.title), 'facebooksharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600'); 
  });
  $(".twitter").click(function(e){
      e.preventDefault();
      window.open('https://twitter.com/intent/tweet?text=[%EA%B3%B5%EC%9C%A0]%20' +encodeURIComponent(document.URL)+'%20-%20'+encodeURIComponent(document.title), 'twittersharedialog', 'menubar=no, toolbar=no, resizable=yes, scrollbars=yes, height=300, width=600');
  });
  // 헤더 베너 이미지 슬라이드
  var showImg, nextImg;
  fadeInOut = function(){
        showImg = $("#banner div:eq(0)");
        nextImg = $("#banner div:eq(1)");
        nextImg.addClass('active');
        nextImg.css("opcity","0").animate({opacity:1},1000,function(){$("#banner").append(showImg); showImg.removeClass("active");})
  };
  fadeInOut();
  timer = setInterval('fadeInOut()',3000);
      
  // 라이트박스
  
  $(".lightbox").lightGallery({
    autoplay:true,
    pause:3000
  }); 


});