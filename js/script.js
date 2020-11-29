const IconBurger = document.querySelector(".burger");
IconBurger.addEventListener("click", ChangeMenu)

const HeaderNav = document.querySelector("nav");

const OverFlow = document.querySelectorAll(".overflow")
OverFlow[0].addEventListener("click", ChangeMenu)
OverFlow[1].addEventListener("click", ChangeMenu)

const MenuLink = document.querySelectorAll(".menu a")

MenuLink[0].addEventListener("click", ChangeMenu)
MenuLink[1].addEventListener("click", ChangeMenu)
MenuLink[2].addEventListener("click", ChangeMenu)
MenuLink[3].addEventListener("click", ChangeMenu)

function ChangeMenu() {
    HeaderNav.classList.toggle("shows");
    OverFlow[0].classList.toggle("on");
    OverFlow[1].classList.toggle("on");
    document.body.classList.toggle("on");
    IconBurger.classList.toggle("on");
}