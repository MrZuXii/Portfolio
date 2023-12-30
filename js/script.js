const MenuLinks = document.querySelectorAll(".menu a, .overflow, .burger");
const BtnTop = document.querySelector("div.top");
const age = document.querySelector(".age");
const year = document.querySelector(".year");
MenuLinks.forEach((MenuLink) => MenuLink.addEventListener("click", ChangeMenu));

function ChangeMenu() {
  document.querySelector("nav").classList.toggle("on");
  MenuLinks.forEach((OverFlow) => OverFlow.classList.toggle("on"));
}
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) BtnTop.classList.add("on");
  else BtnTop.classList.remove("on");
});
BtnTop.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

year.textContent = new Date().getFullYear();
const ageCalc =
  new Date().getMonth() > 4 ||
  (new Date().getMonth() == 4 && new Date().getDay >= 4);

age.textContent = ageCalc
  ? new Date().getFullYear() - 2000
  : new Date().getFullYear() - 2001;
console.log(new Date().getMonth());

console.log();
