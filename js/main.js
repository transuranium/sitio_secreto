const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// Слайдер

document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".slider");
  let currentSliderIndex = 0;

  function showSlider(index) {
    for (let i = 0; i < sliders.length; i++) {
      sliders[i].style.display = "none";
    }
    sliders[index].style.display = "block";
  }

  function nextSlider() {
    currentSliderIndex++;
    if (currentSliderIndex >= sliders.length) {
      currentSliderIndex = 0;
    }
    showSlider(currentSliderIndex);
  }

  function prevSlider() {
    currentSliderIndex--;
    if (currentSliderIndex < 0) {
      currentSliderIndex = sliders.length - 1;
    }
    showSlider(currentSliderIndex);
  }

  showSlider(currentSliderIndex);

  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  prevButton.addEventListener("click", prevSlider);
  nextButton.addEventListener("click", nextSlider);
});

function nextSlider() {
  currentSliderIndex++;
  if (currentSliderIndex >= sliders.length) {
    currentSliderIndex = 0;
  }
  showSlider(currentSliderIndex);
}

function prevSlider() {
  currentSliderIndex--;
  if (currentSliderIndex < 0) {
    currentSliderIndex = sliders.length - 1;
  }
  showSlider(currentSliderIndex);
}

function showSlider(index) {
  const slideWidth = sliders[0].clientWidth; // Ширина одного слайда
  sliders.forEach((slider, i) => {
    slider.style.transform = `translateX(${(i - index) * slideWidth}px)`;
  });
}
