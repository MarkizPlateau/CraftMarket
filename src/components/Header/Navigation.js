import React from "react";
import Main from "../Main/Main";
import Favourite from "../Favourite/Favourite";
import New from "../New/New";
import Logout from "../Logout/Logout";


const Navigation = () => {
    return (
        <ul className={"menu"}>
            <Main />
            <Favourite />
            <New />
            <Logout />
        </ul>
    )
}

export default Navigation;