import Header from './Header'
import Catalogo from './Catalogo'
import './HomeDisplay.css'
import { Top } from './TopCard'
import { MainCards } from './MainCards'
import { useEffect, useState } from 'react'
import { getFavorites } from '../../helpers/js/getFavorites'
import { getLocations } from '../../helpers/js/getLocations'

export const HomeDisplay = () => {
	const [locations, setLocations] = useState([]);
	const [category, setCategory] = useState(-1);
	const [searched, setSearched] = useState(false);

	const fetchLocations = async () => {
		const { result } = await getLocations(localStorage.getItem("id"), category);
		console.log(result);
		setSearched(false);
		setLocations(result);
	}
	const fetchFavorites = async () => {
		const { result } = await getFavorites(localStorage.getItem("id"));
		console.log(result);
		setSearched(false);
		setLocations(result);
	}
	const search = async (precioMin, precioMax) => {
		const { result } = await getLocations(localStorage.getItem("id"), category, precioMin, precioMax);
		setLocations(result);
		setSearched(true);
	}
	const atras = () => {
		setCategory(-1);
	}
	useEffect(() => {
		if(category == 0)
			fetchFavorites();
		else fetchLocations();
	}, [category]);
	return (
		<>
			<Header locations={locations} setCategory={setCategory} search={search} />
			<hr />
			<div className="contenedorHomeDisplayMainCardsSlider">
				{(category == -1 && !searched) && <MainCards />}
			</div>
			<div id="mostrarBusqueda">
				<div id="mbIzq">
				{(category != -1) && <button onClick={atras}>Atrás</button>}
					<h2 id="busqueda">
						{
							category == 0 ? "Favoritos" :
								category == 1 ? "Aire libre" :
									category == 2 ? "Salón" :
										category == 3 ? "Elegante" :
											category == 4 ? "Familiar" :
												category == 5 ? "Fiestas" :
												"Locaciones"
						}
					</h2>
				</div>
			</div>
			<div id="catalogo">
				<Catalogo locations={locations} />
			</div>
		</>
	)
}

export default HomeDisplay