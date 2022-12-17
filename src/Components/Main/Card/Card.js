import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
// import Germany from "../../../assets/images/Germany.svg"

const Card = ({img, title, population, region, capital}) => {
    return <>
        <li className="col-3 d-flex align-items-stretch ">
            <div className="hero-card w-100 d-flex flex-column justify-content-between">
                <img className="hero-img js-country-flag img-fluid" src={img} alt="Germany Flag"/>
                <div className="hero-card-box">
                    <div>
                        <h3 className="hero-country-title js-country-name">
                            {title}
                        </h3>
                        <p className="hero-country-desc mb-0">Population: <span className="hero-country-desc-text js-country-population">{population}</span></p>
                        <p className="hero-country-desc my-2">Region: <span className="hero-country-desc-text js-country-region">{region}</span></p>
                        <p className="hero-country-desc mb-0">Capital: <span className="hero-country-desc-text js-country-capital">{capital}</span></p>
                    </div>
                    
                    <Link className="btn btn-outline-success mt-3" to={`country/${title}`}>
                        More info
                    </Link>
                </div>
            </div>
        </li>
    </>
}

export default Card;