$(document).ready(function () {


   // табы
   $('ul.tabs__caption').each(function (i) {
      var storage = localStorage.getItem('tab' + i);
      if (storage) {
         $(this).find('li').removeClass('tabs-active').eq(storage).addClass('tabs-active')
            .closest('div.tabs').find('div.tabs__content').removeClass('tabs-active').eq(storage).addClass('tabs-active');
      }
   });

   $('ul.tabs__caption').on('click', 'li:not(.tabs-active)', function () {
      $(this)
         .addClass('tabs-active').siblings().removeClass('tabs-active')
         .closest('div.tabs').find('div.tabs__content').removeClass('tabs-active').eq($(this).index()).addClass('tabs-active');
      var ulIndex = $('ul.tabs__caption').index($(this).parents('ul.tabs__caption'));
      localStorage.removeItem('tab' + ulIndex);
      localStorage.setItem('tab' + ulIndex, $(this).index());
   });


   if (jQuery(window).width() < 767) {
      $(".navigation-aside").on('click', function () {
         $(this).toggleClass('navigation-aside--active');
      });
   }

   // боковое меню
   $('.aside').on('click', function () {
      $(this).toggleClass('aside--active');
      $(this).next().toggleClass('game-trainings__background--active');
   });


   $('.content-info').on('click', function () {
      $(this).parent().find('.aside').removeClass('aside--active');
      $(this).parent().find('.game-trainings__background').removeClass('game-trainings__background--active');
   });

});