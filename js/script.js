//togle class active
const navbarnav = document.querySelector(".navbar-nav");
//ketika menu di klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarnav.classList.toggle("active");
};

//klik diluar kolom untuk menon-activekan
const hamberger = document.querySelector("#humberger-menu");
document.addEventListener("click", function (e) {
  if (!hamberger.contains(e.target) && !navbarnav.contains(e.target)) {
    !navbarnav.classList.remove("active");
  }
});
