// lmao
function updateDay() { // Note to self, make autoupdate
 now = new Date()
 $("#currentdate").html(now.toDateString())
 switch (now.getDay()) {
   case 1:
   case 4:
     cohort = "Cohort A"
     break;
   case 2:
   case 5:
     cohort = "Cohort B"
     break;
   default:
     cohort = "Nobody"    
 }
  $("#cohort").html(cohort)
}
$(document).ready(function () {
  // set up links
  $("a").attr("target", "_blank").attr("referrerpolicy", "no-referrer");
  $("a.navbar-brand").attr("target", "");
  updateDay()
});

function getFromTime(now,h,m,s) {
  end = new Date();
  end.setHours(h);
  end.setMinutes(m);
  end.setSeconds(s);
  return end - now.getTime();
}
function getTimeUntilNextPeriod(now) {
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
function countdown() {
now = new Date()
runCountdown("#countdown-end",getFromTime(now,14,5,0))
runCountdown("#countdown-luncha",getFromTime(now,10,45,0))
runCountdown("#countdown-lunchb",getFromTime(now,11,20,0))
runCountdown("#countdown-lunchc",getFromTime(now,12,0,0))
runCountdown("#countdown-period",getTimeUntilNextPeriod(now))
}
countdown()
setInterval(countdown);


