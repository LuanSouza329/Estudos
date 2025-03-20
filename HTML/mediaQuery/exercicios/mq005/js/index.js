const hamb = document.getElementById("hamb");
const menu = document.querySelector(".menu"); 

console.log(menu);

hamb.addEventListener("click", () => {
    menu.classList.toggle("toggle");
});