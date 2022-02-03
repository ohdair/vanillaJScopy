const images = [
  "_DSC3783.jpg",
  "_DSC4288.jpg",
  "_DSC5314.jpg",
  "_DSC5540.jpg",
  "_DSC5699.jpg",
  "_DSC5787.jpg",
];

const choicedImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choicedImage}`;

document.body.appendChild(bgImage);
