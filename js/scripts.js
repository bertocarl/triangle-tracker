$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();

    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    var result;
    //checks if the triangle is not a triangle
    if (side1 !== side2 && side2 !== side3) {
      result = ("isosceles triangle");
      $("#triangleImage").prop("src", "img/isosceles.png")
    //checks if the triangle is equilateral and all sides are equal
    } else if (side1 == side2 && side2 === side3) {
      result = ("Equilateral triangle"); // All side equal
      $("#triangleImage").prop("src", "img/equilateral.png")
    //checks if the triangle is a scalene and no side is equal
  } else if (side1 !== side2 && side2 !== side3) {
      result = ("Scalene triangle"); // No side equal
      $("#triangleImage").prop("src", "img/scalene.png")
    }
    //concludes that the triangle is isosceles after the above checks are not true and two sides are equal
    else {
      result = ("Not a triangle"); // Two sides equal
      $("#triangleImage").prop("src", "img/not-triangle.png")
    }

    $(".panel").text(result).show();


  });
});
//this functions checks for arithmetic errors while inputing values in the input boxes
$(function() {
    var createAllErrors = function() {
        var form = $(this);
        var errorList = $('ul.errorMessages', form);

        var showAllErrorMessages = function() {
            errorList.empty();

            //Find all invalid fields within the form.
            form.find(':invalid').each(function(index, node) {

                //Find the field's corresponding label
                var label = $('label[for=' + node.id + ']');

                //Opera incorrectly does not fill the validationMessage property.
                var message = node.validationMessage || 'Invalid value.';
                errorList
                    .show()
                    .append('<li><span>' + label.html() + '</span> ' + message + '</li>');
            });
        };

        $('input[type=submit], button', form).on('click', showAllErrorMessages);
        $('input[type=text]', form).on('keypress', function(event) {
            //keyCode 13 is Enter
            if (event.keyCode == 13) {
                showAllErrorMessages();
            }
        });
    };

    $('form').each(createAllErrors);
});
//this resets the form data to refresh values for the next checks
function reset () {
  location.reload ();
}
