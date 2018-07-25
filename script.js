$(document).ready (function() {
	
	
	$("button").click( function() {
		console.log("clicked");
		document.getElementById("demo").innerHTML =
		Math.floor(Math.random() * 6);
		random_txt_color();
		random_bg_color();
	
	});
	
	function random_txt_color() {
	    var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var textcolor = "rgb(" + x + "," + y + "," + z + ")";
		console.log(textcolor);
  
		document.body.style.background = textcolor;
	}
	
	function random_bg_color() {
		var x = Math.floor(Math.random() * 256);
		var y = Math.floor(Math.random() * 256);
		var z = Math.floor(Math.random() * 256);
		var bgColor = "rgb(" + x + "," + y + "," + z + ")";
		console.log(bgColor);
  
		document.body.style.background = bgColor;
	}	
});