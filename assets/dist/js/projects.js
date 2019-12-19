$(document).ready(function () {
   $(".gallery__item").slice(0, 6).show();
   $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".gallery__item:hidden").slice(0, 3).fadeIn('slow');
   });
});