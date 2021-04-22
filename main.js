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
  return end - new Date().getTime();
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
    dist = today-now
    if (dist > 0) {
    return dist
    }
  }
  return -1
}

function runCountdown(selector,distance) {
  if (distance < 0) {
    $(selector).html("0h 0m 0s ")
    return;
  }
  // Time calculations for hours, minutes and seconds
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $(selector).html(hours + "h " + minutes + "m " + seconds + "s ")
}

function onSecond() {
  // function handling all countdowns
  runCountdown("#countdown-end",getEndOfSchool());
  runCountdown("#countdown-period",getTimeUntilNextPeriod())
}
onSecond();
setInterval(onSecond, 1000);
