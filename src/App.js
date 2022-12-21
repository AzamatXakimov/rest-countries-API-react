import { useEffect, useState } from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Country } from "./Pages/Country/Country";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { lang } from "./Lang/Lang";


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

  useEffect(() => {
      localStorage.setItem("theme", theme)
  }, [theme]);

  i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: lang.en,
      },
      ru: {
        translation: lang.ru,
      },
      uz: {
        translation: lang.uz,
      },
    }
  });

  return <>
  <div className={`h-100 body-bg ${theme}`}>
    <Header setTheme={setTheme} theme={theme}/>
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/country/:countryName" element={<Country />}/>
    </Routes> 
  </div>
  </>
}

export default App;