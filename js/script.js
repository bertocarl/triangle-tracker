function triangleTracker() {


// var firstSide = parseInt(document.getElementById('a').side);
// var secondSide = parseInt(document.getElementById('b').side);
// var thirdSide = parseInt(document.getElementById('c').side);
// var outputs = document.getElementById("outputs");

var firstSide = document.getElementById('a').side;
var secondSide = document.getElementById('b').side;
var thirdSide = document.getElementById('c').side;

if(firstSide==secondSide && secondSide==thirdSide && thirdSide==firstSide){
  alert("equilateral triangle");
}
else if(firstSide==secondSide || secondSide==thirdSide || thirdSide==firstSide){
  alert("isosceles");
}
else if(firstSide!==secondSide!==thirdSide){
  alert("scalene");
}
else if(firstSide + secondSide <= thirdSide || firstSide + thirdSide <= secondSide || secondSide + thirdSide
}
else {
  alert("enter valid side");
}
}
