import React, { useRef } from "react";
import logoImage from '../../assets/gpi-wb.png';
import './Header.css'
import Category from './Category'
import AdressAutocompleto from "../panel/AdressAutocompleto";

function Header({setCategory, search}) {
	const inputMin = useRef(null);
	const inputMax = useRef(null);

	const submitSearch = () => {
		const min = inputMin.current.value.trim();
		const max = inputMax.current.value.trim();
		if(min.length == 0 && max.length == 0) return;
		search(min, max);
	}
	return (
		<>
			<header>
				<div id="searchBar">
					<input ref={inputMin} className="searchInput" type="number" placeholder="mínimo - $0" id="inpMin" min="0" max="10000" />
					<input ref={inputMax} className="searchInput" type="number" placeholder="máximo - $10,000" id="inpMax" min="0" max="10000" />
					<input className="searchInput" type="date" id="fecha" />
					<AdressAutocompleto/>
					<button onClick={submitSearch} id="btnSearch">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" width="64px" height="64px"><path d="M 31 11 C 19.973 11 11 19.973 11 31 C 11 42.027 19.973 51 31 51 C 34.974166 51 38.672385 49.821569 41.789062 47.814453 L 54.726562 60.751953 C 56.390563 62.415953 59.088953 62.415953 60.751953 60.751953 C 62.415953 59.087953 62.415953 56.390563 60.751953 54.726562 L 47.814453 41.789062 C 49.821569 38.672385 51 34.974166 51 31 C 51 19.973 42.027 11 31 11 z M 31 19 C 37.616 19 43 24.384 43 31 C 43 37.616 37.616 43 31 43 C 24.384 43 19 37.616 19 31 C 19 24.384 24.384 19 31 19 z" /></svg>
					</button>
				</div>
				<img id="logo" src={logoImage} alt="Logo" />
			</header>
			<Category setCategory={setCategory}/>
		</>
	)
}

export default Header