$(document).ready(function () {
	$(".sidebar ul:first-child li").click(function () {
		var color = $(this).css("background-color");
		$("h2").css("background-color", color);
		$(".name p").css("color", color);
		$(".headline").css("border-color", color);
	});
});
