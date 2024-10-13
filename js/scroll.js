window.addEventListener("scroll", function () {
  let maxScroll = 70;
  let nowScroll = window.scrollY;
  let header = document.querySelector("#header");

  if (nowScroll > maxScroll) {
    header.style.backgroundColor = "black";
  } else {
    header.style.backgroundColor = "transparent";
  }
});
