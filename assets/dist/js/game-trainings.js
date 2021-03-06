$(document).ready(function () {

      jcf.setOptions('Scrollable', {
         alwaysPreventMouseWheel: true
      });

      jcf.replaceAll();


      var checkout = $("#calendar").datepicker({
         classes: 'calendar',
         // inline: true,
         minDate: new Date(),
         timepicker: true,
         dateFormat: 'dd.mm.yy ',
         minHours: 8,
         maxHours: 19,
         maxMinutes: 55,
         navTitles: {
            days: 'MM <i>yyyy</i>',
            months: 'yyyy',
            years: 'yyyy1 - yyyy2'
         },
         prevHtml: '<i class="icon-arrow-2 arrow-calendar arrow-calendar--prev"></i>',
         nextHtml: '<i class="icon-arrow-2 arrow-calendar"></i>',
         // createButton: true,
         onSelect: function (formattedDate) {
            $('#calendar-2').val(formattedDate);
         }
      });


      $(".modal__content").scroll(function () {
         $('#calendar').datepicker({
            classes: 'calendar',
            // inline: true,
            minDate: new Date(),
            timepicker: true,
            dateFormat: 'mm.dd.yy ',
            minHours: 8,
            maxHours: 19,
            maxMinutes: 55,
            navTitles: {
               days: 'MM <i>yyyy</i>',
               months: 'yyyy',
               years: 'yyyy1 - yyyy2'
            },
            prevHtml: '<i class="icon-arrow-2 arrow-calendar arrow-calendar--prev"></i>',
            nextHtml: '<i class="icon-arrow-2 arrow-calendar"></i>',
            onSelect: function (formattedDate) {
               $('#calendar-2').val(formattedDate);
            }
         })
      });


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

      // табы обычные без кеша
      // $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      //    $(this)
      //       .addClass('active').siblings().removeClass('active')
      //       .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      // });


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
      var href = $('.content-info__link').each(function () {
         var href = $(this).attr('href');
         if (hash == href.substr(0, href.length - 5)) {
            var toLoad = hash + '.html #content';
            $('#content').load(toLoad);
         }
      });

      $('.content-info__link').click(function () {

         var toLoad = $(this).attr('href') + ' #content';
         $('#content').fadeOut('fast').hide(loadContent);
         window.location.hash = $(this).attr('href').substr(0, $(this).attr('href').length - 5);

         if (toLoad && jQuery(window).width() < 767) {
            $(this).parents().find('.aside').css({'display': 'none'});
            $(this).parents().find('.game-trainings__main').addClass('game-trainings__main--page-inner')
         } else if (toLoad && jQuery(window).width() > 767) {
            $(this).parents().find('.game-trainings__main').addClass('game-trainings__main--page-inner')
         }

         function loadContent() {
            $('#content').load(toLoad, '', showNewContent());
         }

         function showNewContent() {
            $('#content').fadeIn('slow').show();
         }

         return false;
      });


      // счетчик лишков
      var number = "123456789";

      $.each($("ol > li"), function (i) {
         $(this).attr("mark", "0" + number[i] + " ");
      });


      // $('[data-fancybox="gallery"]').fancybox({
      //    toolbar: false,
      //    smallBtn: false,
      //    arrows: false,
      //    idleTime: false,
      //    infobar: false,
      //    loop: true,
      //    imageScale: false,
      //    afterLoad: function (instance, slide) {
      //       $('<a title="Close" class="fancybox-item fancybox-close" href="javascript:;" data-fancybox-close><i class="icon-close"></i></a><a title="Previous" class="fancybox-item fancybox-nav fancybox-prev" href="javascript:;" data-fancybox-prev><i class="icon-arrow fancybox__arrow fancybox__arrow--prev"></i></a><a title="Next" class="fancybox-item fancybox-nav fancybox-next" href="javascript:;" data-fancybox-next><i class="icon-arrow fancybox__arrow"></i></a>').appendTo(slide.$content);
      //    },
      //    hideOnOverlayClick: true,
      //    enableEscapeButton: true
      // });
   }
);