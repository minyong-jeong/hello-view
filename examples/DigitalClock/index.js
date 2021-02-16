window.onload = function() {
  startTime();
}

function startTime() {
  var ampm = "";
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();

  // set AM PM
  (h >= 12) ? ampm = "PM" : ampm = "AM";

  // set 2 digits number
  h = checkHour(h);
  m = checkTime(m);
  s = checkTime(s);

  document.getElementById('clock').innerHTML = h + ":" + m + ":" + s + " " + ampm;
  var t = setTimeout(startTime, 1000);
}

function checkTime(i) {
  return (i < 10) ? ("0" + i) : i;
}

function checkHour(i) {
  return (i > 12) ? (i - 12) : ((i < 10) ? ("0" + i) : i)
}
