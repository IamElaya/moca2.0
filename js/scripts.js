$(function() {
  $('#inputName').on('focusout', function(){
    checkName($('#inputName').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputCarMake').on('focusout', function(){
    checkCarMake($('#inputCarMake').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputCarModel').on('focusout', function(){
    checkCarModel($('#inputCarModel').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputCarYear').on('focusout', function(){
    checkCarYear($('#inputCarYear').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputAddress').on('focusout', function(){
    checkAddress($('#inputAddress').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputEmail').on('focusout', function(){
    checkEmail($('#inputEmail').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  $('#inputPhoneNumber').on('focusout', function(){
    checkPhoneNumber($('#inputPhoneNumber').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  function checkName(name) {
    if (name.match(/^[a-z ,.'-]+$/i))
      $("#nameForm p").text("");
    else
      $("#nameForm p").text("Please Put a Name").css({color:"Red"});
      // var needName = $('#inputName').attr("placeholder", "Please put a name");
  }

  function checkCarMake(carMake) {
    if (carMake.match(/^[a-z ,.'-]+$/i))
      $("#carMakeForm p").text("");
    else
      $("#carMakeForm p").text("Please Put a Car Make").css({color:"Red"});
  }

  function checkCarModel(carModel) {
    if (carModel.match(/^[a-z ,.'-]+$/i))
      $("#carModelForm p").text("");
    else
      $("#carModelForm p").text("Please Put a Car Model").css({color:"Red"});
  }

  function checkCarYear(carYear) {
    if (carYear.match(/^\d{4}$/))
      $("#carYearForm p").text("");
    else
      $("#carYearForm p").text("Please Put a Car Year").css({color:"Red"});
  }

  function checkAddress(address) {
    if (address)
      $("#addressForm p").text("");
    else
      $("#addressForm p").text("Please Put an address").css({color:"Red"});
  }

  function checkEmail(email) {
    if (email)
      $("#emailForm p").text("");
    else
      $("#emailForm p").text("Please Put an email").css({color:"Red"});
  }

  function checkPhoneNumber(phoneNumber) {
    if (phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
      $("#phoneNumberForm p").text("");
    else
      $("#phoneNumberForm p").text("Please Put a phone number").css({color:"Red"});
  }
});


