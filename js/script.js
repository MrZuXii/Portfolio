const IconBurger = document.querySelector(".burger");
const HeaderNav = document.querySelector("nav");
const OverFlow = document.querySelectorAll(".overflow")
const Cross = document.querySelectorAll(".menu a")

function ChangeMenu() {
    HeaderNav.classList.toggle("shows");
    OverFlow[0].classList.toggle("on");
    OverFlow[1].classList.toggle("on");
    document.body.classList.toggle("on");
    IconBurger.classList.toggle("on");
}
IconBurger.addEventListener("click", ChangeMenu)
OverFlow[0].addEventListener("click", ChangeMenu)
OverFlow[1].addEventListener("click", ChangeMenu)
Cross[0].addEventListener("click", ChangeMenu)
Cross[1].addEventListener("click", ChangeMenu)
Cross[2].addEventListener("click", ChangeMenu)
Cross[3].addEventListener("click", ChangeMenu)