$(document).ready(function(){
    $("#bg").fadeIn(1000);
    $("#model").animate({"top":"120px"},1000);

    $("#bg").click(function(){
     $("#model").animate({"top":"-800px"},1000);
  $(this).fadeOut(1000);

    });
})