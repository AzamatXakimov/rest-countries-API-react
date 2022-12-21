import "./Header.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Header = ({setTheme, theme}) => {
    // const [language, setLenguage] = useState("en")
    const {t, i18n} = useTranslation()
    return <>
        <header className="site-header">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <Link className="logo d-inline-block" to="/">
                        {t("header.logo")}
                    </Link>

                    <div className="d-flex align-items-center justify-content-between">
                        <select class="form-select languages-selsect" defaultValue={i18n.language} aria-label="Choose Labguages" onChange={(evt) => i18n.changeLanguage(evt.target.value)}>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                            <option value="uz">UZ</option>
                        </select>
                        <button className="dark-btn d-inline-flex  align-items-center bg-transparent border-0" onClick={() => {
                            setTheme(theme === "light" ? "dark" : "light")
                        }} type="button">
                            {t("header.darkModeBtb")}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;