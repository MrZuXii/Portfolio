const MenuLinks = document.querySelectorAll(".menu a, .overflow, .burger")
MenuLinks.forEach((MenuLink) => MenuLink.addEventListener("click", ChangeMenu))

function ChangeMenu() {
    document.querySelector("nav").classList.toggle("on");
    MenuLinks.forEach((OverFlow) => OverFlow.classList.toggle("on"));
}