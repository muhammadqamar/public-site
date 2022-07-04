$(".banner_slider2").owlCarousel({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true,
  centerMode: true,
  centerPadding: "60px",
});

$(".logo_slider3").owlCarousel({
  // dots: false,
  // infinite: true,
  // autoplay: true,
  // slidesToShow: 4,
  // slidesToScroll: 1,
  // arrows: false,
  // variableWidth: true,
  // speed: 2000,
  // autoplaySpeed: 2000,
  // cssEase: "linear",
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$(".love_slider").slick({
  dots: true,
  infinite: true,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  speed: 800,
  autoplaySpeed: 800,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 699,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
