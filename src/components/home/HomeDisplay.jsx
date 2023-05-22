import Header from './Header'
import Catalogo from './Catalogo'
import './HomeDisplay.css'
import { Top } from './TopCard'
import { MainCards } from './MainCards'

export const HomeDisplay = () => {
    return(
        <>
        <Header/>
        <hr />
        <div className="contenedorHomeDisplayMainCardsSlider">
        <MainCards/>
        </div>
        <div id="mostrarBusqueda">
          <div id="mbIzq">    
            <h2 id="busqueda">Populares</h2>
          </div>
        </div>
        <div id="catalogo">
        <Catalogo/>
        </div>
        </>
    )
}

export default HomeDisplay