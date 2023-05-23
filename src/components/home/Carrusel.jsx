import { Carousel } from 'react-carousel-minimal';
import './Carrusel.css'
function Carrusel({id, imagenes}) {
 const data = [
    {
      image: imagenes,
      caption: "Darjeeling"
    }
  ];

  const captionStyle = {
    fontSize: '0em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  return (
    <div className="Carrusel">
      <div style={{ textAlign: "center" }}>
          <Carousel
            data={data}
            time={5000}
            width="39vw"
            height="24vw"
            captionStyle={captionStyle}
            radius="0.5vw"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="2vw"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="120vw"
            style={{
              display: "inline-table",
              textAlign: "center",
              maxWidth: "100%",
              margin: "2%",
            }}
          />
        </div>
      </div>
  );
}

export default Carrusel;
