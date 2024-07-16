//#region xử lý hiện ẩn của side menu
let span= document.querySelectorAll(".left span");
let icon= document.querySelector(".left .icon ");
let i= document.querySelectorAll(".left .icon i");
let menu = document.querySelector(".nav-menu");
icon.addEventListener("click", () => {
    span.forEach(element => element.classList.toggle("hidden"));
    i.forEach(element=> element.classList.toggle("hidden"));
    menu.classList.toggle("nav-menu");
})
//#endregion
//#region xử lý click menu
 let listItem= document.querySelectorAll (".nav .nav-item a");
 let listBox = document.querySelectorAll (".right-main .box");
 listItem.forEach((element, index) => element.addEventListener("click", ()=> {
    listBox.forEach( listBox => listBox.style.display =" none");
    listBox[index].style.display = "block";
    listItem.forEach(item => item.style.color="white");
    element.style.color = "red";
 }));
//#endregion