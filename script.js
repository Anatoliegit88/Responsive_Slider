//Global Variables
const prevSlide = document.querySelector("#prevSlide");
const nextSlide = document.querySelector("#nextSlide");
const countProgres = document.querySelector("#count_progress");
const countTotal = document.querySelector("#count_total");
const progress = document.querySelector(".complete");

const slides = [
  {
    title: "Air Baloon",
    url: "./Foto/f1.jpg",
  },
  {
    title: "Air Baloon",
    url: "./Foto/f2.jpg",
  },
  {
    title: "Air Baloon",
    url: "./Foto/f3.jpg",
  },
  {
    title: "Air Baloon",
    url: "./Foto/f4.jpg",
  },
  {
    title: "Air Baloon",
    url: "./Foto/f5.jpg",
  },
  {
    title: "Air Baloon",
    url: "./Foto/f6.jpg",
  },
];

let slidesInPage = 3;
let currentPage = 1;
let pages = 4;
let currentView = "desktop";
//Counter Pages
countProgres.innerText = formattedNumber(currentPage);
countTotal.innerText = formattedNumber(pages);
//Responsive Layout
window.addEventListener("resize", function () {
  let newView = "";
  if (window.innerWidth > 1024) {
    slidesInPage = 3;
    pages = 4;
    newView = "desktop";
  } else if (window.innerWidth > 768 && window.innerWidth <= 1024) {
    slidesInPage = 2;
    pages = 5;
    newView = "tablet";
  } else if (window.innerWidth <= 768) {
    slidesInPage = 1;
    pages = 6;
    newView = "mobile";
  }
  if (newView !== currentView) {
    slidingSlides();
    currentView = newView;
  }
});
//Update after new layout
window.addEventListener("load", function () {
  slidingSlides();
});
//Moving the Sides
function formattedNumber(num) {
  return num < 10 ? `${num}` : num;
}
prevSlide.addEventListener("click", function () {
  if (currentPage > 1) {
    currentPage -= 1;
  } else {
    currentPage = pages;
  }
  slidingSlides();
});
nextSlide.addEventListener("click", function () {
  if (currentPage < pages) {
    currentPage += 1;
  } else {
    currentPage = 1;
  }
  slidingSlides();
});
//Render Slides
function slidingSlides() {
  const sliderDiv = document.querySelector(".slider");
  sliderDiv.innerHTML = "";
  let index = currentPage - 1;
  for (let i = 0; i < slidesInPage; i++) {
    sliderDiv.innerHTML += `
  <div class="slide">
    <div class="image" style="background-image: url(${slides[index].url})"></div>
    <div class="detail">${slides[index].title}</div>
  </div>`;
    index++;
  }
  updateControls();
}
//Control/Count of Slide
function updateControls() {
  countProgres.innerText = formattedNumber(currentPage);
  countTotal.innerText = formattedNumber(pages);
  const newWidth = (currentPage / pages) * 100;
  progress.style.width = ` ${newWidth}%`;
}
