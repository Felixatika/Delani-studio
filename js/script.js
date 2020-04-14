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
  $("#pic1")
    .mouseover(function () {
      $("#overlay").show();
      var overlay = document.getElementById("overlay");
      overlay.style.border = "3px white solid";
      overlay.style.width = "82%";
      overlay.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay").hide();
    });
});
$(document).ready(function () {
  $("#pic2")
    .mouseover(function () {
      $("#overlay1").show();
      var overlay1 = document.getElementById("overlay1");
      overlay1.style.border = "3px white solid";
      overlay1.style.width = "82%";
      overlay1.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay1").hide();
    });
});
$(document).ready(function () {
  $("#pic3")
    .mouseover(function () {
      $("#overlay2").show();
      var overlay2 = document.getElementById("overlay2");
      overlay2.style.border = "3px white solid";
      overlay2.style.width = "82%";
      overlay2.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay2").hide();
    });
});
$(document).ready(function () {
  $("#pic4")
    .mouseover(function () {
      $("#overlay3").show();
      var overlay3 = document.getElementById("overlay3");
      overlay3.style.border = "3px white solid";
      overlay3.style.width = "82%";
      overlay3.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay3").hide();
    });
});
$(document).ready(function () {
  $("#pic5")
    .mouseover(function () {
      $("#overlay4").show();
      var overlay4 = document.getElementById("overlay4");
      overlay4.style.border = "3px white solid";
      overlay4.style.width = "82%";
      overlay4.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay4").hide();
    });
});
$(document).ready(function () {
  $("#pic6")
    .mouseover(function () {
      $("#overlay5").show();
      var overlay5 = document.getElementById("overlay5");
      overlay5.style.border = "3px white solid";
      overlay5.style.width = "82%";
      overlay5.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay5").hide();
    });
});
$(document).ready(function () {
  $("#pic7")
    .mouseover(function () {
      $("#overlay6").show();
      var overlay6 = document.getElementById("overlay6");
      overlay6.style.border = "3px white solid";
      overlay6.style.width = "82%";
      overlay6.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay6").hide();
    });
});
$(document).ready(function () {
  $("#pic8")
    .mouseover(function () {
      $("#overlay7").show();
      var overlay7 = document.getElementById("overlay7");
      overlay7.style.border = "3px white solid";
      overlay7.style.width = "82%";
      overlay7.style.height = "80%";
    })
    .mouseout(function () {
      $("#overlay7").hide();
    });
});

$(document).ready(function () {
  $("form#contact-form").submit(function (event) {
    var name = $("input#NAME1").val();
    var email = $("input#NAME2").val();
    var message = $("textarea#comment").val();
    if ($("input#NAME1").val() && $("input#NAME2").val()) {
      alert(
        name +
          ", we have received your message. Thank you for reaching out to us."
      );
    } else {
      alert("Please enter your name and email!");
    }
  });
});
