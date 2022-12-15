import React from "react";
import "./Main.css"
import Card from "./Card/Card"

const Main = () => {
    const [inputValue, setInputValue] = React.useState("")
    const [selectValue, setSelectValue] = React.useState("")
    let[loading, setLoading] = React.useState(true)
    let[isError, setIsError] = React.useState(false)
    let [data, setData] = React.useState([])

    // async function getInfo(){
    //     try {
    //         const res = await fetch(`https://restcountries.com/v3.1/all`)
    //         const data = await res.json();
            
    //         setData(data);
    //     } catch (error) {
    //         setIsError(true)
    //         console.log(error);
    //     }
    // }
    // async function getSearch(){
    //     try {
    //         const res = await fetch(`https://restcountries.com/v3.1/name/${inputValue.current.value}`)
    //         const data = await res.json();
            
    //         setData(data);
    //         setLoading(false);
    //     } catch (error) {
    //         setIsError(true);
    //         setLoading(false);
    //         console.log(error);
    //     }
    // }



    React.useEffect(() => {
        // getInfo()
        fetch(`https://restcountries.com/v3.1/all`)
        .then(response => response.json())
        .then(json => {
            setData(json);
            setLoading(false)
        })
        .catch(err => {
            setIsError(true);
            setLoading(false)
        })
        
    }, []);

    React.useEffect(() => {
        if(inputValue === ""){
            // getInfo()
            fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
            })
        }
        else{
            // getSearch(inputValue)

            fetch(`https://restcountries.com/v3.1/name/${inputValue}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
                setLoading(false)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
            })
        }
    }, [inputValue]);

    React.useEffect(() => {
        if(selectValue === ""){
            // getInfo()
            fetch(`https://restcountries.com/v3.1/all`)
            .then(response => response.json())
            .then(json => {
                setData(json);
                setLoading(false)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
            })
        }
        else{
            // getSearch(inputValue)

            fetch(`https://restcountries.com/v3.1/region/${selectValue}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setData(json);
                setLoading(false)
            })
            .catch(err => {
                setIsError(true);
                setLoading(false)
            })
        }
    }, [selectValue]);


    const changeValue = (evt) => {
        if(evt.key === "Enter"){
            // console.log("Enter");
            setInputValue(evt.target.value)
        }
    }

    return <>
        <main className="site-main">
            <section className="hero">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <form className="search-form" onSubmit={evt => evt.preventDefault()}>
                            <input className="hero-search w-100 border-0" type="text" onKeyDown={changeValue} name="search_value" aria-label="Search" placeholder="Search for a country…"/>
                        </form>
                        <form className="region-form" action="#" method="post" onSubmit={evt => evt.preventDefault()}>
                            <select className="hero-select  w-100" aria-label="Choose Region" onChange={(evt) => setSelectValue(evt.target.value)}>
                                <option className="hero-options" value="" selected>Filter by Region</option>
                                <option className="hero-options" value="africa">Africa</option>
                                <option className="hero-options" value="americas">Americas</option>
                                <option className="hero-options" value="asia">Asia</option>
                                <option className="hero-options" value="europe">Europe</option>
                                <option className="hero-options" value="oceania">Oceania</option>
                                <option className="hero-options" value="antarctic">Antarctic</option>
                            </select>
                        </form>
                    </div>

                    {loading && <h2>Loading ...</h2>}
                    {isError && <h2>Error ...</h2>}

                    {Array.isArray(data) && (
                        <ul className="countries-list row gy-5 list-unstyled">
                            {data.map(item => {
                                return <Card img={item.flags?.svg} title={item.name?.common} population={item.population} region={item.region} capital={item.capital} />
                            })}
                        </ul>
                    )}
                </div>
            </section>
        </main>
    </>
}

export default Main;