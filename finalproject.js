//<reference path="..globals/jquery/index.d.ts" />

function revealTyler() 
{
    //var tylerDurden = document.getElementById("Tyler_Durden_Inspiration").style.display="block";

    var tylerDurden = document.getElementById("Tyler_Durden_Inspiration")

    if (tylerDurden.style.display === "none") 
    {
        tylerDurden.style.display = "block";
    } 
    else 
    {
        tylerDurden.style.display = "none";
    }

    //Tyler_Durden_Inspiration.add(tylerDurden)
}

/*carousel();

function carousel() { 
  var slideIndex = 0;
  var i;
  var x = document.getElementsByClassName("carousel").childNodes;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 500); // Change image every 2 seconds
}*/

!(function(d){
    // Variables to target our base class,  get carousel items, count how many carousel items there are, set the slide to 0 (which is the number that tells us the frame we're on), and set motion to true which disables interactivity.
    var itemClassName = "carousel__photo";
        items = d.getElementsByClassName(itemClassName),
        totalItems = items.length,
        slide = 0,
        moving = true; 
  
    // To initialise the carousel we'll want to update the DOM with our own classes
function setInitialClasses() {
  
      // Target the last, initial, and next items and give them the relevant class.
      // This assumes there are three or more items.
      items[totalItems - 1].classList.add("prev");
      items[0].classList.add("active");
      items[1].classList.add("next");
    }
  
    // Set click events to navigation buttons
  
function setEventListeners() {
      var next = d.getElementsByClassName('carousel__button--next')[0],
       prev = d.getElementsByClassName('carousel__button--prev')[0];
  
      next.addEventListener('click', moveNext);
      prev.addEventListener('click', movePrev);
    }
  
    // Disable interaction by setting 'moving' to true for the same duration as our transition (0.5s = 500ms)
function disableInteraction() {
      moving = true;
  
      setTimeout(function(){
        moving = false
      }, 500);
    }
  
function moveCarouselTo(slide) {
  
      // Check if carousel is moving, if not, allow interaction
      if(!moving) {
  
        // temporarily disable interactivity
        disableInteraction();
  
        // Preemptively set variables for the current next and previous slide, as well as the potential next or previous slide.
        var newPrevious = slide - 1,
            newNext = slide + 1,
            oldPrevious = slide - 2,
            oldNext = slide + 2;
  
        // Test if carousel has more than three items
        if ((totalItems - 1) > 3) {
  
          // Checks if the new potential slide is out of bounds and sets slide numbers
          if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
          } else if (newNext >= (totalItems - 1)){
            oldNext = 0;
          }
  
          // Check if current slide is at the beginning or end and sets slide numbers
          if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide + 1);
          } else if (slide === (totalItems -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
          }
  
          // Now we've worked out where we are and where we're going, by adding and removing classes, we'll be triggering the carousel's transitions.
  
          // Based on the current slide, reset to default classes.
          items[oldPrevious].className = itemClassName;
          items[oldNext].className = itemClassName;
  
          // Add the new classes
          items[newPrevious].className = itemClassName + " prev";
          items[slide].className = itemClassName + " active";
          items[newNext].className = itemClassName + " next";
        }
      }
    }
  
    // Next navigation handler
function moveNext() {
    
        
      // Check if moving
      if (!moving) {
  
        // If it's the last slide, reset to 0, else +1
        if (slide === (totalItems - 1)) {
          slide = 0;
        } else {
          slide++;
        }
  
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }
  
    // Previous navigation handler
function movePrev() {
  
      // Check if moving
      if (!moving) {
  
        // If it's the first slide, set as the last slide, else -1
        if (slide === 0) {
          slide = (totalItems - 1);
        } else {
          slide--;
        }
  
        // Move carousel to updated slide
        moveCarouselTo(slide);
      }
    }
  
    // Initialise carousel
function initCarousel() {
      setInitialClasses();
      setEventListeners();
  
      // Set moving to false now that the carousel is ready
      moving = false;
    }
  
    // make it rain
initCarousel();
}(document));


/*$(document).ready(function(){
    $('#intro.slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  });

var slideIndex = 1;
var timer = null;
showSlides(slideIndex);

function plusSlides(n) {
  clearTimeout(timer);
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearTimeout(timer);
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  //var dots = document.getElementsByClassName("slide");
  if (n==undefined){n = ++slideIndex}
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  timer = setTimeout(showSlides, 5000);
} 

$('.carosel').carousel()*/

/*var slides = document.querySelectorAll('#slides .slides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);
  
function nextSlide() {
      slides[currentSlide].className = 'slide';
      currentSlide = (currentSlide+1)%slides.length;
      slides[currentSlide].className = 'slide showing';
}*/


/*function append_intro_slides()
{
    intro_photo_div = document.getElementById("intro_slides")
    for (i = 1; i < 10; i++)
    {
        var intro_image = document.createElement("img")
        intro_image.setAttribute("src", "/introduction_photos/intro_0" + i + ".jpg")
        intro_photo_div.appendChild(intro_image)
    }
    for (i = 0; i < 7; i++)
    {
        var intro_image = document.createElement("img")
        intro_image.setAttribute("src", "/introduction_photos/intro_1" + i + ".jpg")
        intro_photo_div.appendChild(intro_image)
    }
    //document.appendChild(intro_photo_div)
}*/

/*function intro_slides_slideshow()
{
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) 
    {
        showDivs(slideIndex += n);
    }

    function showDivs(n) 
    {
        var i;
        var x = document.getElementsByClassName("intro_slides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) 
        {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
}*/

/*$('#intro_slides').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });*/


/*function intro_slides()
{
    var images = [];
    for (i = 1; i < 10; i++)
    {
        //var intro_image = document.createElement("img")
        images.push("/introduction_photos/intro_0" + i + ".jpg")
        //intro_photo_div.appendChild(intro_image)
    }
    for (i = 0; i < 7; i++)
    {
        //var intro_image = document.createElement("img")
        images.push("/introduction_photos/intro_1" + i + ".jpg")
        //intro_photo_div.appendChild(intro_image)
    }

    images[0] = '/introduction_photos/intro_01.jpg'
    images[1] = '/introduction_photos/intro_02.jpg'

    var i = 0;
    var time = 3000;

    function change_image()
    {
        document.slide.src = images[i];

        if (i < images.length -1)
        {
            i++;
        }
        else
        {
            i = 0;
        }

        setTimeout("change_image()", time);
    }
}*/