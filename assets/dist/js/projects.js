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

});