$(document).ready(function(){

$(".sidebar ul:first-child li").click(function(){
    var color = $(this).css("background-color");
    $(".logo img").css("border-color", color);
    $(".name p").css("color", color);
    $("h2").css("color", color);
});
});
