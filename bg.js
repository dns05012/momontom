const body = document.querySelector("body");

const IMG_NUMBER = 3;

// function handleImgLoad() {
//   console.log("finished loading");
// }

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.png`;
  image.classList.add("bgImage");
  body.appendChild(image);
  // image.addEventListener("loadend", handleImgLoad);
}

function genernateRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genernateRandom();
  paintImage(randomNumber);
}

init();