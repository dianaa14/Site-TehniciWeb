<!-- Begin
startday = new Date();
clockStart = startday.getTime();
function initStopwatch() {
var myTime = new Date();
return((myTime.getTime() - clockStart)/1000);
}
function getSecs() {
    var tSecs = Math.round(initStopwatch());
    var iSecs = tSecs % 60;
    var iMins = Math.round((tSecs-30)/60);
    var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
    document.getElementById("timespent").value = sMins+":"+sSecs;
    window.setTimeout('getSecs()',1000);
}

function myFunction1() {
  var x = document.getElementById("img1");
  if (x.style.display === "none") {
   x.style.display = "block";
  } else {
   x.style.display = "none";
  }
}
function myFunction2() {
  var x = document.getElementById("img2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction3() {
  var x = document.getElementById("img3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction4() {
  var x = document.getElementById("img4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myFunction5() {
  var x = document.getElementById("img5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
