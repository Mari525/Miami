let body = document.getElementById("body");
let openBtn = document.getElementById("open-btn");
let burger = document.getElementById("burger");
let closeBtn = document.getElementById("close-btn");
let burgerLinks = document.querySelectorAll(".burger__link");

let galleryBtnSmall = document.getElementById("gallery-btn-small");
let galleryBtnBig = document.getElementById("gallery-btn-big");
let galleryShow = document.querySelector(".gallery-show");
let gallerySmall = document.querySelector(".gallery-small");
let galleryBig = document.querySelector(".gallery-big");

let form = document.getElementById("form");

openBtn.addEventListener('click', function(){
  burger.style.display = "block";
  body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', function() {
  burger.style.display = "none";
  body.style.overflow = "auto";
})

for (let i = 0; i < burgerLinks.length; i++) {
  burgerLinks[i].addEventListener('click', function() {
      burger.style.display = "none";
      body.style.overflow = "auto";
  })
}

galleryBtnSmall.addEventListener('click', function() {
  galleryShow.style.display = "block";
  galleryBtnSmall.style.display = "none";
  gallerySmall.style.paddingBottom = "0";
})

galleryBtnBig.addEventListener('click', function() {
  galleryShow.style.display = "block";
  galleryBtnBig.style.display = "none";
  galleryBig.style.paddingBottom = "0";

})

form.addEventListener("click", function(e) {
  e.preventDefault();
})

