

$('.one-time__container').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 466,
        settings: {
         arrows:false,
        }
      }
    ],
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
    nextArrow:
      '<button type="button" class="slick-next slider__next-arrow">Previous</button>;',
  });
