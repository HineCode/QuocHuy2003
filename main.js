const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

// thanh menu mobi //

// menu_item.forEach((item) => {
//   item.addEventListener("click", () => {
//     hamburger.classList.toggle("active");
//     mobile_menu.classList.toggle("active");
//   });
// });

const today = document.querySelector(".today");
const requestSpan = document.querySelector(".request span");
const requestP = document.querySelector(".request p");
const getA = document.querySelector(".get a");

setTimeout(() => {
  requestSpan.innerHTML = cardHeading.innerHTML =
    "Request Early Access to Get Started";
  requestP.innerHTML =
    " Register today & start exploring the endless possiblities.";
  cardBtn.innerHTML = "Read More";

  // remove loading
  document.querySelectorAll(".loading").forEach((item) => {
    item.classList.remove("loading");
  });
}, 1000);
