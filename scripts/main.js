function play() {
    var audio = new Audio('audio/audio_file.weba');
    audio.play();
  }
var audio = new Audio('audio/audio_file.weba');
audio.play()
var myImage = document.querySelector('img[src="images/bruh1.png"]' );
var myImage2 = document.querySelector('img[src="images/channels4_profile.jpg"]' );
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bruh1.png") {
    myImage.setAttribute("src", "images/bruh2.png");
  } else {
    myImage.setAttribute("src", "images/bruh1.png");
  }
};
myImage2.onclick = function () { audio.play() };
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Привет, как тебя зовут?");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Привет, " + myName + ', как тебе моя первая страница';
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Привет, " + storedName + ', как тебе моя первая страница';
  }
  
  myButton.onclick = function () {
    setUserName();
  };
  