let prevArrow = document.getElementById("prevArrow");
let nextArrow = document.getElementById("nextArrow");

$(".main_slider").slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow,
  speed: 1300,
  autoplay: true,
  autoplaySpeed: 1000,
});