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


   $('.game-trainings__content').on('click', function () {
      $(this).parent().find('.aside').removeClass('aside--active');
      $(this).parent().find('.game-trainings__background').removeClass('game-trainings__background--active');
   });


   // Check for hash value in URL
   var hash = window.location.hash.substr(1);
   var href = $('.content-info__link').each(function(){
      var href = $(this).attr('href');
      if(hash==href.substr(0,href.length-5)){
         var toLoad = hash+'.html #content';
         $('#content').load(toLoad);
      }
   });

   $('.content-info__link').click(function(){

      var toLoad = $(this).attr('href')+' #content';
      $('#content').fadeOut('fast').hide(loadContent);
      window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);

      if (toLoad && jQuery(window).width() < 767){
         $(this).parents().find('.aside').css({'display':'none'});
         $(this).parents().find('.game-trainings__main').addClass('game-trainings__main--page-inner')
      } else if(toLoad && jQuery(window).width() > 767){
         $(this).parents().find('.game-trainings__main').addClass('game-trainings__main--page-inner')
      }

      function loadContent() {
         $('#content').load(toLoad,'',showNewContent());
      }
      function showNewContent() {
         $('#content').fadeIn('slow').show();
      }
      return false;
   });
});