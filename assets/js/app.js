$(function (param) {

  $(".fa-sharp").on('click', function (param) {
    $(".searchform").toggle(1000);
  })

  $(window).on('scroll', function (param) {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $('.navbar').addClass('navborder');
    } else {
      $('.navbar').removeClass('navborder');

    }
  })



  var typed = new Typed('.element', {
    strings: ['Software Company', 'Training Institute'],
    smartBackspace: true, // Default value
    typeSpeed: 100,
    startDelay: 100,
    backDelay: 1000,
    loop: true,
    loopCount: Infinity,
  });



  $(".switcher-icon").on('click', function (param) {
    $(".colorswitcher").toggleClass('switchershow');
  })

  $(".swticherbtn").each(function (param) {
    $(this).on('click', function (param) {
      let colors = $(this).attr('data-color');
      document.documentElement.style.setProperty('--blue', colors);
    })

  })

  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })








})