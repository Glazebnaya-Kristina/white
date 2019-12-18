$(document).ready(function () {
   $(".new__item").slice(0, 9).show();
   $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".new__item:hidden").slice(0, 3).fadeIn('slow');
      $('html,body').animate({
         scrollTop: $(this).offset().top
      }, 500);
   });
});