let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const showSlide = (index) => {
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
};

// Next/Prev Buttons
document.querySelector(".next").addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

// Dot Navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    slideIndex = index;
    showSlide(slideIndex);
  });
});

// Auto Slide Every 3 Seconds
setInterval(() => {
  slideIndex++;
  showSlide(slideIndex);
}, 3000);

// Initial Slide
showSlide(slideIndex);
