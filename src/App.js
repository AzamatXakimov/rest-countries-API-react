import React from "react";
import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { Country } from "./Pages/Country/Country";
const App = () => {
  return <>
    <Header />
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/country/:countryName" element={<Country />}/>
    </Routes> 
  </>
}

export default App;