$(document).ready(function () {
   $('.team__carousel-nav').slick({
      infinite: true,
      slidesToShow: 2,
      focusOnSelect: true,
      prevArrow: '<button type="button" class="button-arrow team__arrow team__arrow--left"><i class="icon-right-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow team__arrow team__arrow--right"><i class="icon-right-arrow"></i></button>',
      dots: false,
      asNavFor: '.team__carousel, .team__carousel-description'
   });

   $('.team__carousel').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
      fade: true,
      asNavFor: '.team__carousel-nav'
   });

   $('.team__carousel-description').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
      fade: true,
      asNavFor: '.team__carousel-nav'
   });
});



