function triangleTracker() {
var a;
var b;
var c;
}
//All sides are equal
if(a==b && b==c){
  alert("equilateral triangle");
}//At least two sides are equal
else if(a==b && b!=c ) || (a!=b && c==a) || (c==b && c!=a){
  alert("isosceles");
}//No sides are equal
else if(a!=b && b!=c && c!=a){
  alert("scalene");
}
else if(a >= (b+c) || c >= (b+a) || b >= (a+c) )
}
else {
  alert("Not a triangle");
}
}
