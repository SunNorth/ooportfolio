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


// Parallax effect

// var ParallaxManager, ParallaxPart;

// ParallaxPart = (function () {
//   function ParallaxPart(el) {
//     this.el = el;
//     this.speed = parseFloat(this.el.getAttribute('data-parallax-speed'));
//     this.maxScroll = parseInt(this.el.getAttribute('data-max-scroll'));
//   }

//   ParallaxPart.prototype.update = function (scrollY) {
//     if (scrollY > this.maxScroll) {
//       return;
//     }
//     var offset = -(scrollY * this.speed);
//     this.setYTransform(offset);
//   };

//   ParallaxPart.prototype.setYTransform = function (val) {
//     this.el.style.webkitTransform = "translate3d(0, " + val + "px, 0)";
//     this.el.style.MozTransform = "translate3d(0, " + val + "px, 0)";
//     this.el.style.OTransform = "translate3d(0, " + val + "px, 0)";
//     this.el.style.transform = "translate3d(0, " + val + "px, 0)";
//     this.el.style.msTransform = "translateY(" + val + "px)";
//   };

//   return ParallaxPart;
// })();

// ParallaxManager = (function () {
//   ParallaxManager.prototype.parts = [];

//   function ParallaxManager(elements) {
//     if (Array.isArray(elements) && elements.item) {
//       this.elements = Array.prototype.slice.call(elements);
//     } else if (typeof elements === 'string') {
//       this.elements = document.querySelectorAll(elements);
//       if (this.elements.length === 0) {
//         throw new Error('Parallax: No elements found');
//       }
//       this.elements = Array.prototype.slice.call(this.elements);
//     } else {
//       throw new Error('Parallax: Element variable is not a querySelector string, Array, or NodeList');
//     }
//     for (var i in this.elements) {
//       this.parts.push(new ParallaxPart(this.elements[i]));
//     }
//     window.addEventListener('scroll', this.onScroll.bind(this));
//   }
//   ParallaxManager.prototype.onScroll = function () {
//     var scrollY = Math.max(window.pageXOffset, 0);
//     for (var i in this.parts) {
//       this.parts[i].update(scrollY);
//     }
//   };

//   return ParallaxManager;
// })();

// new ParallaxManager('.parallax-layer');

// window.addEventListener('scroll', () => {
//   let parent = document.querySelector('.background-main');
//   let children = parent.querySelectorAll('.parallax-layer');
//   for (let i = 0; i < children.length; i++) {
//     children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
//   }
// }, false);

// $(document).ready(function () {
//   $('section[data-type="background"]').each(function () {
//     var $bgobj = $(this);
//     $(window).scroll(function () {
//       var yPos = -($window.scrollTop() / $bgobj.data('speed'));

//       var coords = '50% ' + yPos + 'px';

//       $bgobj.css({
//         backgroundPosition: cords
//       });
//     });
//   });
// });


// =======================

var background_image_parallax = function ($object, multiplier) {
  multiplier = typeof multiplier !== 'undefined' ? multiplier : 0.8;
  multiplier = 1 - multiplier;
  var $doc = $(document);
  $object.css({
    "position": "fixed"
  });
  $(window).scroll(function () {
    var from_top = $doc.scrollTop() + 50,
      bg_position = '100px ' + (multiplier * from_top) + 'px';
    $object.css({
      "background-position": bg_position
    });
  });
};

// const $ = () => {};

// const key = "key-with-dashes";

// const o = {
//   [key]: "value"
// };

// const backgroundImageParallax = ({
//   $object,
//   xOffset = 0,
//   yOffset = 0,
//   multiplier = 0.8
// }) => {
//   multiplier = 1 - multiplier;
//   const $doc = $(document);
//   $object.css({
//     position: "fixed"
//   });
//   $(window).scroll(() => {
//     const from_top = $doc.scrollTop() + yOffset;
//     const totalOffsetFromTop = from_top * multiplier;
//     const bg_position = `${xOffset}px ${totalOffsetFromTop}px`;
//     $object.css({
//       "background-position": bg_position
//     });
//   });
// };



//optional second value for speed
background_image_parallax($(".parallax-layer"), 0.25);