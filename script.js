var time = 0
function startTimer() {
  setInterval(setTime, 1000)
}

function setTime() {
  ++time
  var secondsLabel = document.getElementById("timer")
  secondsLabel.innerHTML = time
}

function move() {
  var icon = document.getElementById("icon")
  icon.classList.add("move-right")
}

function setProperty(duration) {
  icon.style.setProperty("--animation-time", duration + "s")
}

function changeAnimationTime() {
  var min = 2
  var max = 6
  var randomInteger = min + Math.floor((max - min) * Math.random())
  setProperty(randomInteger)
}

/* setInterval(changeAnimationTime, 1000); */
window.onload = function() {
  startTimer()
  // move()
}
