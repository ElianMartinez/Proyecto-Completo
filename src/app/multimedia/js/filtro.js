{function(){
	$(document).ready(function(){
  $(".btn-menu").click(function(){ 
    var filtro = $(this).attr("data-filtro");

    if (filtro == "Todo") {

    	$(".box-img").show(500);
    } else {
    	$(".box-img").not("."+filtro).hide(500);
    	$(".box-img").filter("."+filtro).show(500);
    }

  });
	});
}

()
}



 
(function($){
  $.fn.liveFilter = function(inputEl, filterEl, options){
    var defaults = {
      filterChildSelector: null,
      filter: function(el, val){
        return $(el).text().toUpperCase().indexOf(val.toUpperCase()) >= 0;
      },
      before: function(){},
      after: function(){}
    };
    var options = $.extend(defaults, options);
    
    var el = $(this).find(filterEl);
    if (options.filterChildSelector) el = el.find(options.filterChildSelector);

    var filter = options.filter;
    $(inputEl).keyup(function(){
      var val = $(this).val();
      var contains = el.filter(function(){
        return filter(this, val);
      });
      var containsNot = el.not(contains);
      if (options.filterChildSelector){
        contains = contains.parents(filterEl);
        containsNot = containsNot.parents(filterEl).hide();
      }
      
      options.before.call(this, contains, containsNot);
      
      contains.show();
      containsNot.hide();
      
      if (val === '') {
        contains.show();
        containsNot.show();
      }
      
      options.after.call(this, contains, containsNot);
    });
  }
})(jQuery);