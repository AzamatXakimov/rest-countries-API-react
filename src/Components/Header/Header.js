import React from "react";
import "./Header.css"
import Logo from "../../assets/images/Logo.svg"

const Header = () => {
    return <>
        <header className="site-header">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <a className="logo d-inline-block" href="./index.html">
                        <img src={Logo} alt="Site Logo" />
                    </a>

                    <button className="dark-btn d-inline-flex align-items-center bg-transparent border-0" type="button">
                        Dark Mode
                    </button>
                </div>
            </div>
        </header>
    </>
}

export default Header;