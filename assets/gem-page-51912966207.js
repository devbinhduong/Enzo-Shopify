

    
      
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1657015057266').children('.module');   
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
    
      
    
    
    
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1694522173453"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1696581313559"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1696429087605"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1695109260651"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1694415170240"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1693566745680"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1691998886222"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1691736294922"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1687790205755"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1687336923729"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1684159451008"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1682430079883"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1681737627060"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1680172965427"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1679407745509"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1678116031825"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1677508425077"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1676387891303"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1674827710011"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1670946007487"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1670487162362"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1670487160202"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1668077055098"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1660125353284"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1660125655411"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1663849804012"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1663849826648"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
    
    
    window.__gfAnimate.registerHover(jQuery("#e-1663850094887"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"pulse","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    
    
      