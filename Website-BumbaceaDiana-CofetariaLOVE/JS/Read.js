
function ReadMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display == "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Citeste mai departe"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Mai putin"; 
    moreText.style.display = "inline";
  }
}