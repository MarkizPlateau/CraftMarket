import React from "react";
import Header from "../Header/Header";

const Main = (user) => {
    return (
        <section className={"main-container"}>
            <Header/>
            <h1 className={"main-title"}> Welcome {user.user} in <span>HandiCraftin Market</span></h1>
        </section>
    )
}

export default Main;