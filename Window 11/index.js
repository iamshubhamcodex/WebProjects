const startBtn = document.querySelector(".start button");
const start = document.querySelector(".start");
const vid = document.querySelector("#vid");
const windowIcon = document.querySelector(".window");
const searchBox = document.querySelector(".searchBox");
// searchBox
const startMenu = document.querySelector(".startMenu");
const taskbar = document.querySelector(".taskbar1");
const icons = document.querySelector(".icons");


startBtn.addEventListener("click", () => {
  start.style.opacity = "0";
  startBtn.style.zIndex = "1";
  startBtn.style.cursor = "default";
  startBtn.disabled = true;
  vid.style.opacity = "1";
  taskbar.style.opacity = "1";
  icons.style.left = "5px";
  vid.play();
});

windowIcon.addEventListener("click", () => {
  startMenu.classList.toggle("active");
});

function sea(){
    searchBox.classList.toggle("active");
    searchBox.value = "";
    searchBox.focus();
  };
