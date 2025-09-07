// collecting information

// get slider images | array.from [ES6 feature]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
// get number of images
var imagesNumber = sliderImages.length;
// set current image
var currentImage = 1;
// get image number element
var imageNumber = document.getElementById("slide-number");
// get prvious and next buttons
var prevButton = document.querySelector(".prev");
var nextButton = document.querySelector(".next");

// handle click on previous and next buttons
prevButton.onclick = prevImage;
nextButton.onclick = nextImage;

// create main pagination elment (ul)
var paginationElement = document.createElement("ul");
// set id on ul element
paginationElement.setAttribute("id", "pagination-ul");
// create list items based in images number and append it in ul element
for (var i = 1; i <= imagesNumber; i++) {
  var paginationItem = document.createElement("li");
  //   set custom attribute
  paginationItem.setAttribute("data-index", i);
  //   set item content
  paginationItem.appendChild(document.createTextNode(i));
  //   appent items to main paggination element (ul)
  paginationElement.appendChild(paginationItem);
}
// add the created element to the page
document.getElementById("indicators").appendChild(paginationElement);

// get the new created ul
var paginationUl = document.getElementById("pagination-ul");

// get pagination items | array.from [ES6 feature]
var paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// trigger the checker function
theChecker();

// loop throw all bullets item
for (var i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentImage = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

// previous image function
function prevImage() {
  if (prevButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentImage--;
    theChecker();
  }
}
// next image function
function nextImage() {
  if (nextButton.classList.contains("disabled")) {
    // do nothing
    return false;
  } else {
    currentImage++;
    theChecker();
  }
}

// create the checker function
function theChecker() {
  //   set the image number
  imageNumber.textContent = `image #${currentImage} of ${imagesNumber}`;
  //   remove all active classes function
  removeActive();
  // set active class on current image
  sliderImages[currentImage - 1].classList.add("active");
  //   set active class on current pagination item
  paginationUl.children[currentImage - 1].classList.add("active");
  //   check if current image is the fiirst or last
  if (currentImage == 1) {
    prevButton.classList.add("disabled");
  } else if (currentImage === imagesNumber) {
    nextButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
  }
}
// remove all active classes
function removeActive() {
  // loop throw images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });
  // loop throw pagination bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}
