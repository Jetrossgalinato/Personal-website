function updateTime() {
  const timeElement = document.getElementById("time");
  const now = new Date();
  timeElement.innerText = now.toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
