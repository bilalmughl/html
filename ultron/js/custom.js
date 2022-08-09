'use strict';
const theme = {
  /**
   * Theme's components/functions list
   * Comment out or delete the unnecessary component.
   * Some components have dependencies (plugins).
   * Do not forget to remove dependency from src/js/vendor/ and recompile.
   */
  init: function () {
    theme.stickyHeader();
    theme.videoPopup();
    theme.widthAdj();
  },
  /**
   * Sticky Header
   * Enables sticky behavior on navbar on page scroll
   * Requires assets/js/vendor/headhesive.min.js
  */
  stickyHeader: () => {
    if ($('[class*="oscar-header-style"].position-fixed').length) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        $(function() {
            var header = $('[class*="oscar-header-style"].position-fixed');
            // $('[class*="oscar-header-style"].position-fixed').parent().height( $("header").height() );
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= 100) {
                    header.removeClass('affix-top').addClass("oscar-affix");
                } else {
                    header.removeClass("oscar-affix").addClass('affix-top');
                }
            });
        });
      }
    }
  },
  widthAdj: () => {
    $(function() {
      var colwidth = $('.widthadj').width();
      $('.widthadj').css(
        "margin-right", colwidth  + '%',
      );
    });
  },
  videoPopup: () => {
    // Gets the video src from the data-src on each button
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    console.log($videoSrc);
    // when the modal is opened autoplay it  
    $('#video-popup ').on('shown.bs.modal', function (e) {
      // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
      $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    // stop playing the youtube video when I close the modal
    $('#video-popup ').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 
  },
}
theme.init();