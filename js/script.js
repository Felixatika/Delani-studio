$(document).ready(function () {
  $("#development-image").click(function () {
    $("#development-image").slideDown("1500").hide("1000");
    $("#development").show("1500");
  });
  $("#development").click(function () {
    $("#development").slideUp("1500");
    $("#development-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#design-image").click(function () {
    $("#design-image").slideDown("1500").hide("1000");
    $("#design").show("1500");
  });
  $("#design").click(function () {
    $("#design").slideUp("1500");
    $("#design-image").slideDown("1500");
    // $("#design-image").slideDown("1500");
  });
});

$(document).ready(function () {
  $("#product-image").click(function () {
    $("#product-image").slideDown("1500").hide("1000");
    $("#product").show("1500");
  });
  $("#product").click(function () {
    $("#product").slideUp("1500");
    $("#product-image").slideDown("1500");
  });
});
$(document).ready(function () {
  $("#pic1").mouseover(function () {
    $("#overlay").show();
    var overlay = document.getElementById('overlay');
    // overlay.style.backgroundColor='rgba(255, 255, 255, 0.456)';
    overlay.style.border = '3px white solid';
    overlay.style.width = '88%';
    overlay.style.height = '86%';
  }).mouseout(function () {
    $("#overlay").hide();
  });
});

$(".ptag").hover(function () {
  $(this).addClass("ptag");
}, function () {
  $(this).removeClass("ptag");
});

$(document).ready(function () {
  $("form#contact-form").submit(function (event) {
    var name = $("input#NAME1").val();
    var email = $("input#NAME2").val();
    var message = $("textarea#comment").val();
    if ($("input#NAME1").val() && $("input#NAME2").val()) {
      alert(name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");

    }
  });

});

