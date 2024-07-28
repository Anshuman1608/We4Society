import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousel1 from '../../../assets/images/carousel-1.webp';
import carousel2 from '../../../assets/images/carousel-2.webp';
import './slider.css'; // Assuming you have a CSS file for this component

const SliderHome = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carouselDiv">
      <Slider {...settings} className="customSlider">
        <div>
          <img src={carousel1} alt="ngo-activity-carousel-image-1" className="carouselImage" />
        </div>
        <div>
          <img src={carousel2} alt="ngo-activity-carousel-image-2" className="carouselImage" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderHome;
