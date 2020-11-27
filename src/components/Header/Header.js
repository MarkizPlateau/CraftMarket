import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
const Header = () => {

    return (
        <header className="header_container">
            <Logo className="logo"/>
            <Navigation className="menu"/>
        </header>
    )
}


export default Header;