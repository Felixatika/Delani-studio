$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown("1500").hide("1000");
  });
  $("#design").click(function () {
    $("#design").slideUp("1500");
    // $("#design-image").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown("1500").hide("1000");
  });
  $("#development").click(function () {
    $("#development").slideUp("1500");
    $("#development-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown("1500").hide("1000");
  });
  $("#product").click(function () {
    $("#product").slideUp("1500");
    $("#product-image").slideDown("1500");
  });
});
