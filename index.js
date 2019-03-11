// Look for .hamburger
// var hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function () {
//   // Toggle class "is-active"
//   hamburger.classList.toggle("is-active");
//   // Do something else, like open/close menu
// });


// change class .large to .small for div class=portfolio-img [4]

$(window).on('resize', function () {
  if ($(window).width() < 768) {
    $('.portfolio-img').removeClass('large').addClass('small');
  } else {
    $('div.portfolio-img:nth-child(4)').removeClass('small').addClass('large');
  }
});