// scripts.js
let currentSlide = 0;

function showSlide(index) {
  const slides = document.getElementById("slides");
  const totalSlides = document.querySelectorAll(".slide").length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.addEventListener("DOMContentLoaded", () => {
  setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경

  const slidesElement = document.getElementById("slides");
  slidesElement.addEventListener("click", () => {
    nextSlide();
  });
});

const swiper = new Swiper(".swiper-container", {
  direction: "horizontal", // 가로 방향으로 슬라이드
  slidesPerView: 4, // 한 페이지에 4개의 슬라이드 표시
  spaceBetween: 0, // 슬라이드 간의 간격
  loop: true, // 슬라이드 루프 모드
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // 페이지네이션 클릭 가능
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true, // 스크롤바 드래그 가능
  },
});
