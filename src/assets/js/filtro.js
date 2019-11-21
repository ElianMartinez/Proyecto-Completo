{function(){
	$(document).ready(function(){
  $(".btn-menu").click(function(){ 
    var filtro = $(this).attr("data-filtro");

    if (filtro == "Todo") {

    	$(."box-img").show(500);
    } else {
    	$(".box-img").not("."+filtro).hide(500);
    	$(".box-img").filter("."+filtro).show(500);
    }

  });
	});
}

()
}