const slider = () => {
  $(document).ready(function () {
    $(".slider").slick({
      slidesToShow: 3,
      autoplay: false,
      speed: 1000,
      infinity: true,
      autoplaySpeed: 5000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  });
};

slider();
