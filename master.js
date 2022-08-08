// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById("slide-number");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

next.onclick = nextslide;
prev.onclick = prevslide;
function nextslide() {
  if (next.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide++;
    checker();
  }
}
function prevslide() {
  if (prev.classList.contains("disabled")) {
    return false;
  } else {
    currentSlide--;
    checker();
  }
}
var paginationElement = document.createElement("ul");

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
  // Create The LI
  var paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-index", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);
}
document.getElementById("indicator").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");

var paginationsBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (var i = 0; i < paginationsBullets.length; i++) {
  paginationsBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  };
}

function checker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  removeAllActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide == 1) {
    prev.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
  }
  if (currentSlide == slidesCount) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled");
  }
}
checker();

function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");

    paginationsBullets.forEach((bul) => {
      bul.classList.remove("active");
    });
  });
}
