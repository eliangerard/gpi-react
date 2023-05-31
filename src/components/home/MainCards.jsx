import { Top } from "./TopCard";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export const MainCards = () => {
    const settings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 1.6,
        speed: 500,
        arrows : false
      };
    return (
        <Slider {...settings}>
            <div>
                <Top />
            </div>
            <div>
                <Top />
            </div>
            <div>
                <Top />
            </div>
            <div>
                <Top />
            </div>
          {/* Agrega más divs con tarjetas según sea necesario */}
        </Slider>
      );
}