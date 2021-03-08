import React from "react";
import WebsiteGraphic from "../WebsiteGraphic";

const LandingPage = () => {
    return (
        <section className={"landingPage_section"}>
            <h1 className={"logo"}> <i className={"fas fa-palette logo-palette"}></i> HandiCraftin Market</h1>
            <p>Please Sign in</p>
            <WebsiteGraphic/>
        </section>
    )
}



export default LandingPage;