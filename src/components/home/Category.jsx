import React from "react";
import './Category.css'

function Category(){
    return (
        <ul className="categories">
        <li className="category">
          <div className="catContent">
            <img className="headIcon" src={cloudsIcon} alt="Aire libre" />
          </div>
          <div className="h5">Aire libre</div>
        </li>
        <li className="category">
          <div className="catContent">
            <img className="headIcon" src={hallIcon} alt="Salón" />
          </div>
          <div className="h5">Salón</div>
        </li>
        <li className="category">
          <div className="catContent">
            <img className="headIcon" src={bussinesIcon} alt="Elegante" />
          </div>
          <div className="h5">Elegante</div>
        </li>
        <li className="category">
          <div className="catContent">
            <img className="headIcon" src={familyIcon} alt="Familiar" />
          </div>
          <div className="h5">Familiar</div>
        </li>
        <li className="category">
          <div className="catContent">
            <img className="headIcon" src={partIcon} alt="Fiestas" />
          </div>
          <div className="h5">Fiestas</div>
        </li>
      </ul>
    )
}

export default Category
