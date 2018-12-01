$(document).ready(function() {
  $("form#triangle").submit(function(event){
    event.preventDefault();

    var side1 = parseFloat($("#side1").val());
    var side2 = parseFloat($("#side2").val());
    var side3 = parseFloat($("#side3").val());
    var result;

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      result = ("Not a triangle");
      $("#triangleImage").prop("src", "img/not-triangle.png")
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
