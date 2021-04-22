// lmao
$(document).ready(function () {
  // set up links
  $("a").attr("target", "_blank").attr("referrerpolicy", "no-referrer");
});

function getEndOfSchool() {
  end = new Date();
  end.setHours(14);
  end.setMinutes(5);
  end.setSeconds(0);
  return end;
}
// code stolen lmao
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = getEndOfSchool() - now;
  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "School Over!";
    return;
  }
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}, 1000);
