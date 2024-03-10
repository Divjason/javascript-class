const sliderWrapper = document.querySelector(".container");
const sliderContainer = document.querySelector(".slider-container");
const slides = document.querySelectorAll(".slide");
const pager = document.querySelector(".pager");

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

// pager생성하기
let pagerHTML = "";

for (let i = 0; i < slideCount; i++) {
  slides[i].style.left = `${i * 100}%`;
  pagerHTML += `<span data-idx=${i}>${i + 1}</span>`;
  pager.innerHTML = pagerHTML;
}

const pagerBtn = document.querySelectorAll(".pager span");
// 슬라이드 이동함수
const gotoSlide = (i) => {
  sliderContainer.style.left = `${i * -100}%`;
  sliderContainer.classList.add("animated");
  currentIndex = i;
  // updateNav();

  // pager동시 변경
  for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].classList.remove("active");
  }
  pagerBtn[i].classList.add("active");
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

// pager로 슬라이드 이동
for (let i = 0; i < pagerBtn.length; i++) {
  pagerBtn[i].addEventListener("click", (e) => {
    const pagerNum = e.target.innerText - 1;
    gotoSlide(pagerNum);
  });
}

gotoSlide(0);

// 자동슬라이드 설정

let timer = undefined;

const startAutoSlide = () => {
  timer = setInterval(() => {
    const nextIdx = (currentIndex + 1) % slideCount;
    gotoSlide(nextIdx);
  }, 3000);
  console.log("auto");
};

startAutoSlide();

sliderWrapper.addEventListener("mouseenter", () => {
  clearInterval(timer);
});

sliderWrapper.addEventListener("mouseleave", () => {
  startAutoSlide();
});
