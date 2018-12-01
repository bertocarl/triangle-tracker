$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());
    var result;

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      result = ("Not a triangle");
      $("#triangleImage").prop("src", "")
    } else if (side1 === side2 && side2 === side3 && side1 === side3) {
      result = ("Equilateral"); // All side equal
      $("#triangleImage").prop("src", "https://upload.wikimedia.org/wikipedia/commons/e/e0/Equilateral-triangle.svg")
    } else if (side1 != side2 && side1 != side3) {
      result = ("Scalene"); // No side equal
      $("#triangleImage").prop("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Triangle.Scalene.svg/640px-Triangle.Scalene.svg.png")
    }
    else {
      result = ("Isosceles"); // Two sides equal
      $("#triangleImage").prop("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Triangle.Isosceles.svg/389px-Triangle.Isosceles.svg.png")
    }

    $(".panel").text(result).show();


  });
});
