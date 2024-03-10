const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");

const navPrev = document.querySelector("#prev");
const navNext = document.querySelector("#next");

// 슬라이드 가로정렬
const slideCount = slides.length;
for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
}

// 슬라이드 높이계산
let topHeight = 0;

const calculateTallestSlide = () => {
  for (let i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }
  sliderWrapper.style.height = `${topHeight}px`;
  sliderContainer.style.height = `${topHeight}px`;
};

calculateTallestSlide();

// 버튼 이벤트
let currentIndex = 0;

// 버튼기능 업데이트 함수
const updateNav = () => {
  if (currentIndex === 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }

  if (currentIndex === slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
};

// 슬라이드 이동함수
const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  updateNav();
};

navPrev.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex > 0) {
    gotoSlide(currentIndex - 1);
  } else {
    gotoSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (currentIndex < slideCount - 1) {
    gotoSlide(currentIndex + 1);
  } else {
    gotoSlide(0);
  }
});

gotoSlide(0);
