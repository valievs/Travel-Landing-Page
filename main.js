let burgerMenu = document.querySelector(".burger-menu")
let section = document.querySelector(".section")

burgerMenu.addEventListener("click", ()=>{
   
    section.classList.toggle("active")
})