const body = document.getElementsByTagName("body");
const slider = document.querySelector("#main");
let isDown = false;
let startX;
let scrollLeft;
let images = Array.from(document.getElementsByTagName("img"));
let controls = Array.from(document.querySelectorAll("span"));

slider.addEventListener("mousedown",(e) => {
	isDown = true;
	slider.classList.add("active");
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave",() => {
	isDown = false;
	slider.classList.remove("active");
  });

slider.addEventListener("mouseup",() => {
	isDown = true;
	slider.classList.remove("active");
    
});

slider.addEventListener("mousemove",(e) => {
    if(!isDown) return; //stops function from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});


/* CONTROLS FOR PAUSING AND PLAYING THE SONGS AND CHANGING THE ICON AS NEEDED */
function handleControls(){
 controls.map(control => control.addEventListener("click",(e) => {
  let song = e.target.nextElementSibling;
  let icon = e.target.children[0];
  let isPlaying = icon.classList.contains("fa-play");
  song.paused ? song.play() : song.pause();
   if(isPlaying){
     icon.classList.remove("fa-play");
     icon.classList.add("fa-pause");
   } else {
     icon.classList.remove("fa-pause");
     icon.classList.add("fa-play");
   }
  }));
}

window.onload = handleControls();
