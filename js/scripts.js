$(function() {
  $('#inputName').on('blur', function(){
    checkName($('#inputName').val())
    // checkCarMake($('#inputCarMake').val())
    // checkCarModel($('#inputCarModel').val())
    // checkCarYear($('#inputCarYear').val())
    // checkAddress($('#inputAddress').val())
    // checkPhoneNumber($('#inputPhoneNumber').val())
  });

  function checkName(name) {
    if (name.match(/^[a-z ,.'-]+$/i))
      console.log("HEY")
    else
      console.log("NO")
  }

  function checkCarMake(carMake) {
    if (carMake.match(/^[a-z ,.'-]+$/i))
      console.log("HEY")
    else
      console.log("NO")
  }

  function checkCarModel(carModel) {
    if (carModel.match(/^[a-z ,.'-]+$/i))
      console.log("HEY")
    else
      console.log("NO")
  }

  function checkCarYear(carYear) {
    if (carYear.match(/^\d{4}$/))
      console.log("HEY")
    else
      console.log("NO")
  }

  function checkAddress(address) {
    if (address)
      console.log("HEY")
    else
      console.log("NO")
  }

  function checkPhoneNumber(phoneNumber) {
    if (phoneNumber.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))
      console.log("HEY")
    else
      console.log("NO")
  }
});


