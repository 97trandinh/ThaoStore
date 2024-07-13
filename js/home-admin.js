let span= document.querySelectorAll(".left span");
let icon= document.querySelector(".left .icon ");
let i= document.querySelectorAll(".left .icon i");
let menu = document.querySelector(".nav-menu");
icon.addEventListener("click", () => {
    span.forEach(element => element.classList.toggle("hidden"));
    i.forEach(element=> element.classList.toggle("hidden"));
    menu.classList.toggle("nav-menu");
})