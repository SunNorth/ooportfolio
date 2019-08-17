// // change class .large to .small for div class=portfolio-img [4]
$(window).on('resize', function () {
  if ($(window).width() < 768) {
    $('.portfolio-img').removeClass('large').addClass('small');
  } else {
    $('div.portfolio-img:nth-child(4)').removeClass('small').addClass('large');
  }
});

// -------- make divs as links --------

$(".portfolio-img").css('cursor', 'pointer').click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
});

// ============ menu - filter ===========

$(document).ready(function () {

  $('#webdev').click(function (webdev) {
    webdev.preventDefault();
    $('.portfolio-img').hide();
    $('.webdev').show(1000);
  });
  $('#digitgraph').click(function (digitgraph) {
    $('.portfolio-img').hide();
    digitgraph.preventDefault();
    $('.digitgraph').show(1000);
  });
  $('#prints').click(function (prints) {
    $('.portfolio-img').hide();
    prints.preventDefault();
    $('.prints').show(1000);
  });
  $('#showall').click(function (showall) {
    showall.preventDefault();
    $('.portfolio-img').show(1000);
  });
});

// click on <li> and choose all the same classes
// только для экранов больше либо равно 768
// remove class small and add добавить класс .large 4-му элементу [3] если элментов в списке более 5 length >= 5
//

// ------- function check class and id --------

// var groups = ['webdev', 'digitgraph', 'prints'];
// for (var i = 0; i < groups.length; i++) {
//   // console.log(idEl);
//   alert(groups[i]);
//   var idEl = '#' + groups[i];
//   var classEl = '.' + groups[i];
//   $(idEl).click(function e() {
//     e.preventDefault();
//     $('.portfolio-img').hide();
//     $(classEl).show();
//   })
// }


// $('#webdev').click(function (filter) {
//   filter.preventDefault();
//   $('.portfolio-img').hide();
//   $('.webdev').show();
// });
// $('#digitgraph').click(function (filter) {
//   filter.preventDefault();
//   $('.portfolio-img').hide();
//   $('.digitgraph').show();
// });
// $('#prints').click(function (filter) {
//   filter.preventDefault();
//   $('.portfolio-img').hide();
//   $('.prints').show();
// });
// $('#showall').click(function (filter2) {
//   filter2.preventDefault();
//   $('.portfolio-img').show();
// });