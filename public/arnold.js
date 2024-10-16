function play_arnold() { 
  var frame = document.getElementById("youtube-frame");
  if (frame.innerHTML === "")
    {frame.innerHTML += "<iframe width='800' height='600' src='https://www.youtube.com/embed/qJdMjRHRLfg?autoplay=1' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";}
}