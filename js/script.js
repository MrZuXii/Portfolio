const MenuLinks = document.querySelectorAll(".menu a, .overflow, .burger")
const BtnTop = document.querySelector("div.top");
MenuLinks.forEach((MenuLink) => MenuLink.addEventListener("click", ChangeMenu))

function ChangeMenu() {
    document.querySelector("nav").classList.toggle("on");
    MenuLinks.forEach((OverFlow) => OverFlow.classList.toggle("on"));
}
window.addEventListener("scroll", function () {
    if (window.scrollY > 300)
        BtnTop.classList.add("on")
    else
        BtnTop.classList.remove("on")
})
BtnTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
})