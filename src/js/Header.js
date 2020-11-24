import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
const Header = () => {

    const style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    return (
        <header style={style} className="header_container">
            <Logo className="logo"/>
            <Navigation className="menu"/>
        </header>
    )
}


export default Header;