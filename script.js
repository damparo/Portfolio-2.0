$("body").toggleClass("dark");

$(document).on("change",".switch",function() { 
  console.log("hello");
  $("body").toggleClass("dark");

 });



$(".circleone").on("click", function (event) {
  event.preventDefault();
  console.log("hello");
  $("#statement").show();
  $("#about").hide();
  $("#myworks").hide();
  $("#contactme").hide();
  $("#socialmedia").show();
  $(".circles").css("margin-bottom", "30px")
  $(".circles").css("margin-top", "30px")
  $(".darkmode").css("margin-top", "30px")

});

$(".circletwo").on("click", function (event) {
  event.preventDefault();
  console.log("hello");
  $("#about").show();
  $("#statement").hide();
  $("#myworks").hide();
  $("#contactme").hide();
  $("#socialmedia").show();
  $(".circles").css("margin-bottom", "30px")
  $(".circles").css("margin-top", "30px")
  $(".darkmode").css("margin-top", "30px")
});

$(".circlethree").on("click", function (event) {
  event.preventDefault();
  console.log("hello");
  $("#myworks").show();
  $("#about").hide();
  $("#statement").hide();
  $("#contactme").hide();
  $("#socialmedia").show();
  $(".circles").css("margin-top", "30px")
  $(".circles").css("margin-bottom", "30px")
  $(".darkmode").css("margin-top", "30px")
});

$(".circlefour").on("click", function (event) {
    event.preventDefault();
    console.log("hello");
    $("#contactme").show();
    $("#myworks").hide();
    $("#about").hide();
    $("#statement").hide();
    $("#socialmedia").show();
    $(".circles").css("margin-top", "30px")
    $(".circles").css("margin-bottom", "30px")
    $(".darkmode").css("margin-top", "30px")
  });