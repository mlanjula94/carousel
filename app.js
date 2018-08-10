// Put links to our images in this image array.
var images = ["images/dog1.jpg", "images/dog2.jpg", "images/dog3.jpg", "images/dog4.jpg", "images/dog5.jpg"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// Use jQuery to run "startSlideshow" when the page loads.
startSlideshow();

// Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("").click(stopSlideshow);

// Stop using the timer to swicth slides if an arrow is clicked
$(document).on("click", ".arrow", stopSlideshow)

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<button id='arrow-left' class='arrow'></button>" +
    "<img src=" + images[count] + " width='100%'>" +
    "<button id='arrow-right' class='arrow'></button>");

}

function stopSlideshow() {

  // Put our clearInterval here:
  clearInterval(showImage);

}

function nextImage() {
  // Increment the count by 1.
  count++;

  // Show the loading gif in the "image-holder" div.
  $("img").animate({ opacity: '0.5' })

  // Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function prevImage() {
  // Increment the count by 1.
  count--;

  // Show the loading gif in the "image-holder" div.
  $("img").animate({ opacity: '0.5' })

  // Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // If the count is the same as the length of the image array, reset the count to 0.
  if (count === -1) {
    count = images.length - 1;
  }
}


function startSlideshow() {

  // Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

// This will run the display image function as soon as the page loads.
displayImage();


$(document).on("click", "#arrow-right", nextImage);


$(document).on("click", "#arrow-left", prevImage);

