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
let header = document.querySelector("header");
document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(header);
  if ( !click ) {
    header.classList.remove("show");
    burger.classList.remove("open")
  }
})

const imageInput = document.querySelector(".file-input");
const previewContainer = document.querySelector(".preview-container");
imageInput.addEventListener("change", function(event) {
  const files = event.target.files;
  if (files && files.length > 0) {
    previewContainer.innerHTML = "";
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = function(e) {
        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Предварительный просмотр";
        previewContainer.appendChild(img);
      }
      reader.readAsDataURL(file);
    }
  }
});