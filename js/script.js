AOS.init({
    duration: 1500,
})
let faq = document.querySelectorAll(".faq")
faq.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open")
    })
})
window.addEventListener("scroll", function () {
    let btnUp = document.querySelector(".back-to-top")
    if (window.pageYOffset > 475) {
        btnUp.classList.add("scrolled");
    } 
    else {
        btnUp.classList.remove("scrolled");
    }
})
let burger = document.querySelector(".burger");
burger.onclick = function () {
    let header = document.querySelector("header")
    header.classList.toggle("show");
    if(header.classList.contains("show")) {
        burger.classList.toggle("open")
    }
    else {
        burger.classList.remove("open")
    }
}
let header = document.querySelector('header');
document.addEventListener('click', (e) => {
  const click = e.composedPath().includes(header);
  if ( !click ) {
    header.classList.remove("show");
    burger.classList.remove("open")
  }
})