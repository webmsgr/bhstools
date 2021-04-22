// lmao
$(document).ready(function () {
  // set up links
  $("a").attr("target", "_blank").attr("referrerpolicy", "no-referrer");
  $("a.navbar-brand").attr("target", "");
});

function getEndOfSchool() {
  end = new Date();
  end.setHours(14);
  end.setMinutes(5);
  end.setSeconds(0);
  return end;
}
function getTimeUntilNextPeriod() {
  now = new Date()
  endtimes = ["9:5","10:40","12:30","14:5"]
  ends = []
  for (i = 0; i < endtimes.length; i++) {
    today = new Date()
    time = endtimes[i].split(":")
    today.setHours(parseInt(time[0]))
    today.setMinutes(parseInt(time[1]))
    today.setSeconds(0)
    ends.push(today)   
  }
  console.log(ends)
  return -1
}
// code stolen lmao
function CountdownEnd() {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = getEndOfSchool() - now;
  if (distance < 0) {
    $("#countdown-end").html("0h 0m 0s ")
    return;
  }
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#countdown-end").html(hours + "h " + minutes + "m " + seconds + "s ")
}
function CountdownPeriod() {
  var distance = getTimeUntilNextPeriod()
  if (distance < 0) {
    $("#countdown-period").html("0h 0m 0s ")
    return;
  }
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  $("#countdown-period").html(hours + "h " + minutes + "m " + seconds + "s ")
}
function onSecond() {
  // function handling all countdowns
  CountdownEnd();
  CountdownPeriod();
}
onSecond();
setInterval(onSecond, 1000);
