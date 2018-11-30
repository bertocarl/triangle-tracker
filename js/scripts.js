function gettriangle(){
var length=parseFloat(prompt("side length"));
var width=parseFloat(prompt("side width"));
var height=parseFloat(prompt("side height"));

if(length===width && length===height && width===height){
alert("Equilateral triangle");
}
else if(length===width || length===height || width===height){
alert("Isoceles triangle");
}
else if((length+width)<=height || (length+height)<=width || (width+height)<=length){
alert("Scalene");
}
else{
alert("NOT a triangle");
}
}
