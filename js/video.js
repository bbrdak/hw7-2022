//store variables up here for cleanliness
var video;
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var slower = document.querySelector("#slower");
var faster = document.querySelector("#faster");
var volume = document.querySelector("#volume");
var slider = document.querySelector("#slider");
var mute = document.querySelector("#mute");
var skip = document.querySelector("#skip");
var vintage = document.querySelector("#vintage");
var orig = document.querySelector("#orig");

//load and initialize variables
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

//play button
play.addEventListener("click", function() {
	video.play();
	volume.innerHTML = video.volume * 100;
	slider.value = video.volume * 100;
});

//pause button
pause.addEventListener("click", function() {
	video.pause();
})

//slow down button
slower.addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log("Speed is ", video.playbackRate);
})

//speed up button
faster.addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log("Speed is ", video.playbackRate);
});

//mute button
mute.addEventListener("click", function() {
	if(video.muted) {
		video.muted = false;
		mute.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
});

skip.addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;
	if(video.currentTime >= video.duration) { //restart if we pass the end
		video.currentTime = 0;
	}
	console.log("Video current time is ", video.currentTime)
});

slider.addEventListener("input", function() {
	video.volume = slider.value / 100;
	volume.innerHTML = slider.value;
})

vintage.addEventListener("click", function () {
	video.classList.add('oldSchool');
});

orig.addEventListener("click", function() {
	video.classList.remove('oldSchool');
});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

