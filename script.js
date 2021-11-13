
function open_() {
  document.getElementById("js-window").style.display = "block";
}

function close_() {
  document.getElementById("js-window").style.display = "none";
}

function large_images(n) {
  var images = document.getElementsByClassName("js-large-image");
  if (n > images.length) {
    x = 1; //go to the first image
  } 
  if (n < 1) {
    x = images.length; // go to the last image
  }
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none"; //make all images display:none
  }
 
  images[x-1].style.display = "block"; //show the selected image
}


var x=0;

function current(n) {
  large_images(x = n);
}

function next(n) {
  
  large_images(x += n);
}

