$(document).ready(function () {
   $(".gallery__item").slice(0, 6).show();
   $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".gallery__item:hidden").slice(0, 3).fadeIn('slow');
   });


   $('.reviews__carousel').slick({
      infinite: true,
      slidesToShow: 4,
      prevArrow: '<button type="button" class="button-arrow reviews__arrow reviews__arrow--left"><i class="icon-arrow"></i></button>',
      nextArrow: '<button type="button" class="button-arrow reviews__arrow reviews__arrow--right"><i class="icon-arrow"></i></button>',
      dots: false,
      responsive: [
         {
            breakpoint: 1429,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 1023,
            settings: {
               slidesToShow: 2,
            }
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 1,
            }
         }
      ]
   });

   var customersCarousel = $('.customers__carousel');

   customersCarousel.on("init", function (event, slick) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });

   customersCarousel.on("afterChange", function (event, slick, currentSlide) {
      $(".step-count").html(parseInt(slick.currentSlide + 1) + '<span> / ' + slick.slideCount + '</span>');
   });


   customersCarousel.slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 3,
      nextArrow: document.querySelector('.customers__arrow--right'),
      prevArrow: document.querySelector('.customers__arrow--left'),
      dots: false,
      mobileFirst: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 1,
            }
         },
         {
            breakpoint: 1024,
            settings: "unslick"
         }
      ]
   });

   // $(".customers__item").slice(0, 18).show();
   // $("#loadMoreCustomers").on('click', function (e) {
   //    e.preventDefault();
   //    $(".customers__item:hidden").slice(0, 6).fadeIn('slow');
   // });


});