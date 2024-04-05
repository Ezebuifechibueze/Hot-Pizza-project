// initial declarations
let i = 0;
let images = ["Ione.png","Ithree.png", "Itwo.jpeg"];
let time = 1000;
let paused = false;


//slider functionality
function handleChange() {
if (!paused) {
document.slide.src = images[i];
if (i < images.length - 1) {
i++;
} else {
i = 0;
}
}
// slideshow functionality
setTimeout(handleChange, time);
}
// slideshow pause functionality
function pause() {
paused = !paused;
}



function changeTheText (){
  
 var changeTextVariable = document.getElementById('changeUserText').value;

  document.getElementById('paragraphText') .innerHTML = changeTextVariable;
}