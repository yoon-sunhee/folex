$(document).ready(function() {
    //main page fullpage
    if($('#fullpage').length > 0){
    $('#fullpage').fullpage({
    afterLoad: function(origin, destination, direction){
     //using index
     if(destination.index > 0){
         $('.fixed-nav').fadeIn();
         $('.header nav').addClass('fixed');
         $('.logo img').attr('src','images/logo_bl.png');
         $('.toggle-btn img').attr('src','images//menu_icon_bl.png');
    }else{
      $('.fixed-nav').fadeOut();
      $('.header nav').removeClass('fixed');
         $('.logo img').attr('src','images/logo.png');
         $('.toggle-btn img').attr('src','images//menu_icon.png');
     }
     if(destination.index == 5){
          $('.back_to_top').addClass('active');
    }else{
         $('.back_to_top').removeClass('active');
    }

    if(destination.index == 1 || destination.index ==3){
        $('.fixed-nav').find('a').removeClass('active');
      $('.fixed-nav').find('a').removeClass('active-black');
        $('.fixed-nav').find('a').eq(destination.index).addClass('active-black');
     }else{
        $('.fixed-nav').find('a').removeClass('active');
        $('.fixed-nav').find('a').removeClass('active-black');
        $('.fixed-nav').find('a').eq(destination.index).addClass('active');
     }

    }
  });
} //fullpage end

    
    //main page slide
    if($('.main-slides').length > 0){
        const swiper = new Swiper('.main-slides', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    }//main slides
    
        if($('.testimonial-slides').length > 0){
        const testimonialswiper = new Swiper('.testimonial-slides', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable:true
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
    }//testimonial slides

    
    
    
    //toggle menu open & close
    $('.toggle-btn').click(function(){
        $('.toggle-menu').addClass('active');
    });
    $('.toggle-menu .close').click(function(){
        $('.toggle-menu').removeClass('active');
       
    });
    
    
    
    //subpage header fixed
    //$('.subpage nav').addClass('fixed');
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
           $('.subpage nav').addClass('fixed');
           $('.logo img').attr('src','images/logo_bl.png');
        }else{
           $('.subpage nav').removeClass('fixed');
           $('.logo img').attr('src','images/logo.png');
        }
        
        
    // back to top by scrollTop
    var footerOST = $('.footer').offset().top - 800;
        
      if($(this).scrollTop() > footerOST){
          $('.back_to_top').addClass('active');
      }else{
          $('.back_to_top').removeClass('active');
      }    
    });
    
    
    //about_btt클릭하면 화면상단 이동... 속도 easeOutQuint 0.5s
    $('.about_btt').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0}, 500, 'easeOutQuint');
    });


    //contact form
    if($('.contact_contents').length > 0){
        var formInput = $('.contact_contents form input')
        formInput.click(function(){
          $(this).prev().addClass('active');
          $(this).attr('placeholder', '');
        });

    }
    
  
    
});//document ready
// function test(a){
//   if(a==1){
//    $("#userEmail").prev().removeClass('active');
//    $("#userEmail").attr('placeholder', "Your Email");
//   }
//   else if(a==2){
//     $("#username").prev().removeClass('active');
//     $("#username").attr('placeholder', "Your Name");
//   }

//   if($("#username").val()!=""){
//     $("#username").prev().addClass('active');
//   }
//   else if($("#userEmail").val()!=""){
//     $("#userEmail").prev().addClass('active');
//   }
// }