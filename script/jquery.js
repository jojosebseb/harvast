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
var navLi = $('.navbar-ul > ul > li');
var navHandle = $('.mobile-handle');
var navLine1= $('.nav-lines-1');
var navLine2= $('.nav-lines-2');
var navLine3= $('.nav-lines-3');

navHandle.on('click', function(){
  console.log("asd");
  navHandle.toggleClass('active');
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
    'altField' : "#actualDate",
    'altFormat' : "yy-mm-dd",
  });
})


//popup-request

var quoteHandle = $('#quoteHandlePar');
var popup = $('#popup');

quoteHandle.on('click', function(){
  quoteHandle.addClass('active');
})

//our-service

var serviceMod = $('.service-module');
var serviceDesc = $('.service-desc-container');

var serviceFlex = $('.service-flex');
var qTotal = $('.service-flex > .service-module').length;

serviceFlex.on('click', '.service-module', function(){

  var curId = $(this).parent().attr('id');



  if (!$(this).hasClass('active')) {
    serviceMod.removeClass('active');
    $(this).addClass('active');
    var mBottom = $(this).find('.service-desc-container').height();
    serviceMod.css({
      'margin-bottom': 0,
    })
    $(this).css({
      'margin-bottom': mBottom+61+'px',
      opacity: 1
    })
  }else {
    serviceMod.removeClass('active');
    serviceMod.css({
      'margin-bottom': 0,
    })
  }


  // var elIndex = $('.service-module').index(this);
  var elIndex = $(this).parent().find('.service-module').index(this);

  console.log(elIndex);

  var serviceInner = $(this).find('.service-desc');
  var modWidth = serviceMod.width()+2;


  var qLimit = serviceFlex.width() / modWidth;


  if ($.trim(serviceInner.html()) != "") {
    console.log('not empty');
    if (elIndex < qLimit) {
      serviceDesc.css({
        left : '-'+((modWidth * elIndex)-elIndex+1) + 'px'
      })
    }
    else {
      var varF = (Math.floor(elIndex / qLimit)*qLimit);
      elIndex = elIndex - (Math.floor(elIndex / qLimit)*qLimit);
      serviceDesc.css({
        left : '-'+((modWidth * elIndex)-elIndex+1) + 'px'
      })
    }
  }else{
    console.log('empty');
    $(this).removeClass('active');
    serviceMod.css({
      'margin-bottom': 0,
    })
  }




})


//quoteHandle

var quoteHandlePar = $('#quoteHandleParent');
var quoteHandle = $('.quote-handle-title');
var quoteMin = $('.quote-minimize');

quoteHandle.on('click', function(){
  if (!quoteHandlePar.hasClass('active')) {
    quoteHandlePar.addClass('active');
  }
  else {
    quoteHandlePar.removeClass('active');
  }

})
