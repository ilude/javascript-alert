$(document).ready(function() {
	$("body").click(function(e){
		if(Alert.visible()){
			return;
		}
		
		Alert.show("x: " + e.pageX + " y: " + e.pageY);
	});
	
	
});


(function(){
	var alert = function() {
		var css = 	{
			'overflow': 'hidden',
			'width': '100%',
			'text-align': 'center',
			'position': 'relative',
			'top': '0',
			'left': '0',
			'background-color': '#cccccc',
			'color': 'blue',
			'font': '20px/40px arial, sans-serif',
			'display': 'none'
		};
		
		return {
			show: function(message){
				var $div = $("body > div#alert");
				if(!$div.length){
					$div = $("<div/>");
					$div.attr("id", "alert");
					$div.css(css);
					$div.click(function(e){
						e.stopPropagation();
						$div.slideUp("slow");
					})
					
					$("body").prepend($div);
				}
				
				$div.html(message);
				$div.slideDown("slow");
			},
			visible: function(){
				var $div = $("body > div#alert");
				return ($div.length && $div.is(":visible"));
			}
		};
	}
	Alert = alert();	
})();

