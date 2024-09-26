// dropdown
document.querySelectorAll(".dropdown.hover .trigger").forEach((trigger) => {
  trigger.addEventListener("mouseenter", toggleVisibleNextSibling);
});

document.querySelectorAll(".dropdown.click .trigger").forEach((trigger) => {
  trigger.addEventListener("click", toggleVisibleNextSibling);
});

function toggleVisibleNextSibling() {
  this.nextElementSibling.classList.toggle("visible");
}

// carousel
let activeImageNumber = 0;
const images = document.querySelectorAll(".carousel .image");
const imagesNumber = images.length;

generateTick();

styleActiveImageTick();

setInterval(translateNextImage, 5000);

document
  .querySelector(".carousel .next")
  .addEventListener("click", translateNextImage);

document
  .querySelector(".carousel .prev")
  .addEventListener("click", translatePrevImage);

function translateImage(activeImageNumber) {
  images.forEach((image) => {
    image.style.transform = `translateX(-${activeImageNumber * 100}%)`;
  });
  styleActiveImageTick();
}

function translateNextImage() {
  activeImageNumber === imagesNumber - 1
    ? (activeImageNumber = 0)
    : activeImageNumber++;

  translateImage(activeImageNumber);
  styleActiveImageTick();
}

function translatePrevImage() {
  activeImageNumber === 0
    ? (activeImageNumber = imagesNumber - 1)
    : activeImageNumber--;

  translateImage(activeImageNumber);
  styleActiveImageTick();
}

function styleActiveImageTick() {
  const ticks = document.querySelectorAll(".carousel .tick");

  ticks.forEach((tick, i) => {
    i === activeImageNumber
      ? (tick.style.background = "black")
      : (tick.style.background = "white");
  });
}

function generateTick() {
  for (let i = 0; i < imagesNumber; i++) {
    const ticks = document.querySelector(".carousel .ticks");
    const tick = document.createElement("button");

    tick.className = "tick";

    tick.addEventListener("click", () => {
      activeImageNumber = i;

      translateImage(activeImageNumber);
    });

    ticks.appendChild(tick);
  }
}
