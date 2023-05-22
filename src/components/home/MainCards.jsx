import { Top } from "./TopCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const MainCards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '100px',
      };
    return (
        <Slider {...settings}>
            <Top />
            <Top />
            <Top />
            <Top />
          {/* Agrega más divs con tarjetas según sea necesario */}
        </Slider>
      );
}