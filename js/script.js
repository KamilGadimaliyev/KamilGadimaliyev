const sidebar = document.querySelector(".sidebar");
const barInMenu  = document.querySelector (".insideBar")
const sidebarMobile = document.querySelector(".bar")
const expandIcon = document.querySelector(".expand-icon");
const swit = document.querySelector(".switch")
const op = document.querySelector(".op");
let row = document.getElementById("row");
expandIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  swit.style = "display:inline-block";
});

sidebarMobile.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  sidebar.style = "display:inline-block";
});

// Mobile Sidebar
sidebarMobile.addEventListener("click", () => {
  sidebar.classList.add ("open");
  sidebar.style = "display:inline-block";
  sidebarMobile.style= "display:none"
});
barInMenu.addEventListener("click", () => {
  sidebar.style = "display:none";
  sidebarMobile.style= "display:block"
});
//Mobile Sidebar


const stylesheet = document.documentElement.style;

const toggle = document.querySelector(".switch__input[data-theme-toggle]");
toggle.addEventListener("click", () => {
  // get the css variables
  const color1 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-1"
  );
  const color2 = getComputedStyle(document.documentElement).getPropertyValue(
    "--color-2"
  );

  // switching the css variables
  stylesheet.setProperty("--color-1", color2);
  stylesheet.setProperty("--color-2", color1);
});


// 1a0149

var bg_dk_css = document.querySelectorAll(".bg_dk_css");
var pink = document.querySelectorAll(".pink");
var body = document.querySelector("body");
function ToggleBtn() {
    body.classList.toggle("bg-dark");
    bg_dk_css.forEach(x => {
        x.classList.toggle("bg-dark")
    });
    pink.forEach(x => {
        x.classList.toggle("bg-pink")
    });
}