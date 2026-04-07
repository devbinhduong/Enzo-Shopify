

    
      
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1689927097510').children('.module');   
    var navspeed = $module.data('navspeed'),
      autoplaytimeout = $module.data('autoplaytimeout'),
      autoplayhoverpause = $module.data('autoplayhoverpause'),
      navlg = $module.data('navlg'),
      navmd = $module.data('navmd'),
      navsm = $module.data('navsm'),
      navxs = $module.data('navxs'),
      collg = $module.data('collg'),
      colmd = $module.data('colmd'),
      colsm = $module.data('colsm'),
      colxs = $module.data('colxs'),
      dotslg = $module.data('dotslg'),
      dotsmd = $module.data('dotsmd'),
      dotssm = $module.data('dotssm'),
      dotsxs = $module.data('dotsxs'),
      marginlg = parseInt($module.data('marginlg')),
      marginmd = parseInt($module.data('marginmd')),
      marginsm = parseInt($module.data('marginsm')),
      marginxs = parseInt($module.data('marginxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
    var autoplay = $module.data('autoplay'), 
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
        autoplayTimeout: autoplaytimeout,
        loop: loop,
        navSpeed: navspeed,
        autoWidth: !1,
        responsiveClass:true,
        responsive:{
          0:{
            items:colxs,
            nav: navxs,
            dots:dotsxs,
            margin: marginxs
          },
          768:{
            items:colsm,
            nav: navsm,
            dots:dotssm,
            margin: marginsm
          },
          992:{
            items:colmd,
            nav: navmd,
            dots:dotsmd,
            margin: marginmd
          },
          1200:{
            items:collg,
            nav: navlg,
            dots:dotslg,
            margin: marginlg
          }
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
      window.__gfAnimate.registerHover(jQuery("#e-1596744847697"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
      window.__gfAnimate.registerHover(jQuery("#e-1596744966098"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
      window.__gfAnimate.registerHover(jQuery("#e-1596744993441"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
      
    
    
    
    
    
  
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child1-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child2-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child3-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child4-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child5-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child6-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child7-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child8-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child9-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child10-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child11-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child12-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child13-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child14-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child15-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child16-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child17-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child18-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child19-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child20-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child21-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child22-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child23-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child24-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child25-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child26-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child27-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    (function( jQuery ){
  // var $module = jQuery('#m-1695281141088-child28-19').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    