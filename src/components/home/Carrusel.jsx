import { Carousel } from 'react-carousel-minimal';
import './Carrusel.css'
import placeholder from '../../assets/img/gpi_placeholder.png'
function Carrusel({ id, imagenes = [{ image: placeholder, caption :"Imagen" }] }) {
	const images = imagenes.map((image, i) => ({
		image: image.ruta,
		caption :"Imagen #"+i
	}));

	const data = images;

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
					thumbnails={true}
					style={{
						textAlign: "center",
						width: "100%",
						margin: "2%",
					}}
				/>
			</div>
		</div>
	);
}

export default Carrusel;
