import "./Country.css";
import {useParams, useNavigate} from "react-router-dom"
import React from "react"
import { useTranslation } from 'react-i18next';
import { Borders } from "./Borders/Borders";
export const Country = () => {
    const {countryName} =  useParams();
    const navigate = useNavigate();
    const [data, setData] = React.useState({});
    let[loading, setLoading] = React.useState(true);
    let[isError, setIsError] = React.useState(false);

    const {t} = useTranslation()


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
                    {loading && <h2 className="Info-text">Loading ...</h2>}
                    {isError && <h2 className="Info-text">Error ...</h2>}
                    <button className="country-back-link border-0" type="button" onClick={() => navigate(-1)}>{t("CountryCard.BackBtn")}</button>
                    <div className="d-flex align-items-center justify-content-between">
                        <img className="country-flag" src={data.flags?.svg} width="560" height="401" alt={`${data.name?.common} Flag`} />
                        <div className="country-box">
                            <h2 className="country-name">
                                {data.name?.common}
                            </h2>
                            <div className="country-info-box d-flex align-items-start justify-content-between">
                                <ul className="mb-0 me-2 list-unstyled">
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.NativeName")}:</span> {data.name?.common}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.Population")}: </span> {data.population}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.Region")}: </span> {data.region}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.SubRegion")}: </span> {data.subregion}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.Capital")}: </span> {data.capital?.join(", ")}</p>
                                    </li>
                                </ul>
                                <ul className="mb-0 list-unstyled">
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.TLD")}: </span> {data.tld?.join(", ")}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.Currencies")}: </span> {data.currencies ? data.currencies[Object.keys(data.currencies)[0]].name : data.currencies}</p>
                                    </li>
                                    <li className="mb-2">
                                        <p className="country-info-text mb-0"><span className="country-info-title">{t("CountryCard.Languages")}: </span> {data.languages ? Object.values(data.languages).join(", ") : data.languages}</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-start">
                                <p className="country-info-title mb-0">{t("CountryCard.BorderCountries")}: </p>
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