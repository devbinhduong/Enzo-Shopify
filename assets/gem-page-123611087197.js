

    
  
    (function( jQuery ){
  var $module = jQuery('#m-1700056172604').children('.module');
  var defaultOffsetPCT = $module.data('defaultOffsetPct'),
    orientation = $module.data('orientation'),
    moveSliderBy = $module.data('moveSliderBy'),
    sliderSpace = $module.data('sliderSpace');

  var defaultOffsetList = [];
  if($module.find('.gf_imagebeforeafter-item').length ==2){
    defaultOffsetList.push(defaultOffsetPCT);
  }


  $module.gfBeforeAfter({
    childSelector: ".gf_imagebeforeafter-item",
    defaultOffsetList: defaultOffsetList,
    orientation: orientation,
    moveSliderBy: moveSliderBy,
    sliderSpace: sliderSpace
  });
})( window.GemQuery || jQuery );
  window.__gfAnimate.registerHover(jQuery("#m-1700056172604"), '{"animation":{"screens":{"lg":true,"md":true,"sm":true,"xs":true},"name":"bounce_","delay":0,"duration":500,"iteration-count":"1"},"interaction":{"key":"mouse-hover","type":"level2"}}');
    (function( jQuery ){
  var $module = jQuery('#m-1700056846658').children('.module');
  $module.gfV1Popup();

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  if(mode == 'dev') {
    var moduleId = "1700056846658";
    var moduleIdSlug = moduleId.toString().replace(/-/g, '');
    if (moduleIdSlug == "1700056846658") {
      window.getPopup1700056846658 = function() {
        return $module.data('gfv1popup');
      }
    }
  }
})( window.GemQuery || jQuery );
  
    
  
    
  