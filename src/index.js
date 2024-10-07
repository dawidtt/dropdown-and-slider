import "./template.css";
import img1 from "./1.jpeg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";

// function toggleDropdown(e) {
//   [...e.srcElement.parentNode.children].map((child) => {
//     if (child.classList.contains("dropdown")) child.classList.toggle("show");
//   });
// }
// const reveal = document.querySelector(".reveal");
// reveal.addEventListener("click", toggleDropdown);
const sliderWide = document.querySelector(".slider-wide");
const newImage1 = new Image();
newImage1.src = img1;
const newImage2 = new Image();
newImage2.src = img2;
const newImage3 = new Image();
newImage3.src = img3;
const newImage4 = new Image();
newImage4.src = img4;
const newImage5 = new Image();
newImage5.src = img5;
sliderWide.appendChild(newImage1);
sliderWide.appendChild(newImage2);
sliderWide.appendChild(newImage3);
sliderWide.appendChild(newImage4);
sliderWide.appendChild(newImage5);

let currentSlideNumber = 0;
const imgsArray = [...document.querySelectorAll(".slider-wide img")];
const numberOfSlides = imgsArray.length;
imgsArray[currentSlideNumber].classList.toggle("show-slide");
// for (let i = 0; i < numberOfSlides; i++) {
//   console.log("halo");

//   setTimeout(() => {
//     imgsArray[i].classList.toggle("show-slide");
//     console.log("zmiana");
//   }, i * 4000);
//   imgsArray[i].classList.toggle("show-slide");
// }
function nextSlide() {
  if (currentSlideNumber < numberOfSlides - 1) {
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
    currentSlideNumber++;
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
  } else {
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
    currentSlideNumber = 0;
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
  }
}
function previousSlide() {}

const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextSlide);
