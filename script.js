window.onscroll = function () {
  stickynavbar();
};
function stickynavbar() {
  var navbar = document.querySelector(".navbar");
  var body = document.querySelector("body");
  var text = document.querySelector(".navbar").innerHTML;
  console.log(body.offsetTop);
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.backgroundColor = "rgba(3, 0, 20, 0.477)";
    navbar.style.padding = "2.5rem";
    for (const element of document.getElementsByClassName("href")) {
      element.style.color = "white";
    }
  } else {
    navbar.style.padding = "5rem";
    navbar.style.backgroundColor = "";
    for (const element of document.getElementsByClassName("href")) {
      element.style.color = "white";
    }
  }
}
