$(document).ready(function() {

	



	$(".logo").mouseenter(function(){
		$(this).addClass("pulse");        
	});

	$(".logo").mouseleave(function(){
		$(this).removeClass("pulse");
	});
	

	$(".logo").hover(function(){
	    (function pulse(back) {
	$("#pulse").animate(
	    {
	        width: (back) ? $("#pulse").width() + 20 : $("#pulse").width() - 20 
	    }, 700, function(){pulse(!back)});
	})(false);

		console.log("wut");
	});
	
});




