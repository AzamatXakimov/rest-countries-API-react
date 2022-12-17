import "./Country.css";
import {Link, useParams} from "react-router-dom"
import React from "react"
import { Borders } from "./Borders/Borders";
export const Country = () => {
    const {countryName} =  useParams();
    const [data, setData] = React.useState({});
    let[loading, setLoading] = React.useState(true);
    let[isError, setIsError] = React.useState(false);


    React.useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => response.json())
        .then(json => {
            setData(json[0]);
            setLoading(false)
        })
        .catch(err => {
            setIsError(true);
            setLoading(false)
        })
    }, [countryName]);

    return <>
        <main className="site-main">
            <section className="country">
                <div className="container">
                    {loading && <h2>Loading ...</h2>}
                    {isError && <h2>Error ...</h2>}
                    <Link className="country-back-link" to="/">Back</Link>
                    <div className="d-flex align-items-center justify-content-between">
                        <img className="country-flag" src={data.flags?.svg} width="560" height="401" alt={`${data.name?.common} Flag`} />
                        <div className="country-box">
                            <h2 className="country-name">
                                {data.name?.common}
                            </h2>
                            <div className="country-info-box d-flex align-items-start justify-content-between">
                                <ul className="mb-0 me-2 list-unstyled">
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Native Name:</span> {data.name?.common}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Population: </span> {data.population}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Region: </span> {data.region}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Sub Region: </span> {data.subregion}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Capital: </span> {data.capital?.join(", ")}</p>
                                    </li>
                                </ul>
                                <ul className="mb-0 list-unstyled">
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Top Level Domain: </span> {data.tld?.join(", ")}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Currencies: </span> {data.currencies ? data.currencies[Object.keys(data.currencies)[0]].name : data.currencies}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">Languages: </span> {data.languages ? Object.values(data.languages).join(", ") : data.languages}</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-start">
                                <p className="country-info-title mb-0">Border Countries: </p>
                                <ul className="d-flex align-items-center flex-wrap  w-auto  mb-0 ms-3 list-unstyled">
                                    {data.borders ? data.borders.map(item => <Borders>{item}</Borders>) : ""}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
}