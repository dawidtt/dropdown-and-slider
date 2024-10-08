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

const circlesPath = document.querySelector("#circles");
for (let i = 0; i < imgsArray.length; i++) {
  const circle = document.createElement("div");
  circle.innerHTML = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" fill="white"  stroke="black" stroke-width="5"/>
</svg>`;
  circle.classList.add(`circle-${i}`);
  circle.addEventListener("click", () => switchToSlideOfIndex(i));
  circlesPath.appendChild(circle);
}

setCurrentSlide(currentSlideNumber);

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
  setCurrentSlide(currentSlideNumber);
}
function previousSlide() {
  if (currentSlideNumber > 0) {
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
    currentSlideNumber--;
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
  } else {
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
    currentSlideNumber = numberOfSlides - 1;
    imgsArray[currentSlideNumber].classList.toggle("show-slide");
  }
  setCurrentSlide(currentSlideNumber);
}
function switchToSlideOfIndex(index) {
  imgsArray[currentSlideNumber].classList.toggle("show-slide");
  currentSlideNumber = index;
  imgsArray[currentSlideNumber].classList.toggle("show-slide");
  setCurrentSlide(currentSlideNumber);
}
function setCurrentSlide(index) {
  const allCircles = [...document.querySelectorAll("#circles svg circle")];
  for (const circle of allCircles) {
    circle.style.fill = "white";
  }

  const circle = document.querySelector(`.circle-${index} circle`);
  circle.style.fill = "red";
}
const nextBtn = document.querySelector("#next");
nextBtn.addEventListener("click", nextSlide);

const previousBtn = document.querySelector("#previous");
previousBtn.addEventListener("click", previousSlide);

setInterval(nextSlide, 5000);
