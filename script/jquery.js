$('.index-slider').slick({
  arrows: false,
  dots: true,
})

$('.testimonials-container').slick({
  arrows: true,
  dots: false,
  prevArrow: $('.prev-btn'),
  nextArrow: $('.next-btn'),
  // variableWidth: true,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
  ]
})

$('.solution-module-container').slick({

  responsive: [
    {
      breakpoint: 10017,
      settings: 'unslick',
    },
    {
      breakpoint: 1024,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // infinite: true,
        dots: false,
        prevArrow: $('.solution-prev'),
        nextArrow: $('.solution-next'),
        arrows: true,

      }
    },
  ]
})

$(window).on('scroll', function(){
  if($(window).scrollTop() > 300){
    $('#Navbar').addClass('scrolled');
  }
  else {
    $('#Navbar').removeClass('scrolled');
  }
});

//nav
var navLi = $('.navbar-ul > ul > a > li');
var navHandle = $('.mobile-handle');
var navLine1= $('.nav-lines-1');
var navLine2= $('.nav-lines-2');
var navLine3= $('.nav-lines-3');

navHandle.on('click', function(){
  console.log("asd");
  navLine1.toggleClass('active');
  navLine2.toggleClass('active');
  navLine3.toggleClass('active');

  $('.navbar-ul').toggleClass('active');

  navLi.each(function(i){
    $(this).toggleClass('active');
    $(this).css({
      'transition-delay': i/10+'s',
    });
    i++;
  })
})
//nav

$('.custom-drop-down').select2({
  theme: "customjo"
});

$(function(){
  $('.custom-calendar').datepicker({
    'dateFormat' : "MM dd, yy",
    'changeYear' : true,
    'changeMonth' : true,
  });
})
