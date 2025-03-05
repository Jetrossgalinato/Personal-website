function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  timeElement.innerText = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();

const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
