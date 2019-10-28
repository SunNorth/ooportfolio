// // change class .large to .small for div class=portfolio-img [4]

(function () {
  $('div.portfolio-img:nth-child(4)').addClass('large').removeClass('small');
  $(window).on('resize', function () {
    if ($(window).width() < 768) {
      $('.portfolio-img').removeClass('large').addClass('small');
    } else {
      $('div.portfolio-img:nth-child(4)').removeClass('small').addClass('large');
    }
  });
})();

// Resolve .large class issue
// -------- make divs as links --------

$(".portfolio-img").css('cursor', 'pointer').click(function () {
  window.location = $(this).find("a").attr("href");
  return false;
});

// ============ menu - filter ===========

(function () {

  $('li a').click(function (myPrevent) {
    myPrevent.preventDefault();
    var dataAtr = $(this).data("group"),
      classOfImg = $(".portfolio-img");
    if (dataAtr === "showall") {
      classOfImg.slideDown(300);
    } else {
      classOfImg.hide();
      $("." + dataAtr).show(300);
      console.log(dataAtr);
    }
  });
})();

// click on <li> and choose all the same classes
// только для экранов больше либо равно 768
// remove class small and add добавить класс .large 4-му элементу [3] если элментов в списке более 5 length >= 5
// 