import React from "react";
import Main from "./Pages/Main";
import Favourite from "./Pages/Favourite";
import New from "./Pages/New";
import Logout from "./Pages/Logout";


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