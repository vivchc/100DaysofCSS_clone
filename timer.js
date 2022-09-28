/*
 * Timer used in the 100 Days CSS Challenge landing page.
 * Counts down from 19 hours.
 * Programmer: Viann Cheng
 */

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date();
  var hrs = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  // Prints out double digits for numbers <10
  var hLeft = 19 - hrs;
  if (hLeft < 10) {
    hLeft = "0" + hLeft;
  }

  var mLeft = 60 - min;
  if (mLeft < 10) {
    mLeft = "0" + mLeft;
  }

  var sLeft = 60 - sec;
  if (sLeft < 10) {
    sLeft = "0" + sLeft;
  }

  // Display countdown in the element with id="countdown"
  document.getElementById("countdown").innerHTML =
    hLeft + ":" + mLeft + ":" + sLeft;
}, 1000);
