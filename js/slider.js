document.addEventListener("DOMContentLoaded", function () {
 
  const images = document.querySelectorAll(".slider .slider-line img");
  const sliderline = document.querySelector(".slider-line");
  const prevButton = document.querySelector(".slide-prev");
  const nextButton = document.querySelector(".slide-next");

  let count = 0;
  let width;

  function init() {
    console.log("resize");
    width = document.querySelector(".slider").offsetWidth;
    sliderline.computedStyleMap.width = width * images.length;
    console.log(width);
    images.forEach((item) => {
      console.log(item.style);
      item.style.width = width + "px";
        // item.style.height = "auto";
      console.log(item.style.width);
      rollSlider();
    });
  }
  window.addEventListener("resize", init);

  init();

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);
  setInterval(nextSlide, 5000);
  function rollSlider() {
    sliderline.style.transform = "translate(-" + count * width + "px)";
  }

  function prevSlide() {
    count--;
    if (count < 0) {
      count = images.length - 1;
    }
    rollSlider();
  }
  function nextSlide() {
    count++;
    if (count >= images.length) {
      count = 0;
    }
    rollSlider();
  }
});
