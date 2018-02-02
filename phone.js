$(document).ready(function() { // do this when the document is loaded
	$("#content_dialer").show(); // show the element with ID "element"
	$("#content_list").hide();
	$("#content_add").hide(); // hide the element with ID "otherElement"
});

$("#button_1").click(function() { // when "button_id" is clicked
	$("#content_dialer").show(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_add").hide();
});

$("#button_2").click(function() { // when "button_id" is clicked
	$("#content_dialer").hide(); // show element
	$("#content_list").show();	// hide other element
	$("#content_add").hide();
});

$("#button_3").click(function() { // when "button_id" is clicked
	$("#content_dialer").hide(); // show element
	$("#content_list").hide();	// hide other element
	$("#content_add").show();
});

$("#clear").click(function(){
	document.getElementById("dial#").value="";
});