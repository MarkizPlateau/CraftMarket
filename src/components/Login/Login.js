import React from "react";
import Header from "../Header/Header";
import {Link, Switch} from "react-router-dom";
const Login = () => {
    return (
        <section className={"login-container"}>
            <Header/>
            <div className="app">
                <h1 className={"login-title"}> Welcome in <span>HandiCraftin Market</span></h1>
                <br/>
                <h2 className={"login-text"}> Sign in ;)</h2>
                <form className={"login-form"}>
                    <input type="text" id="login-name" name="name" placeholder={"Your name or email"}/>
                    <input type="password" id="login-password" name="password" placeholder={"Password"}/>
                    <Link to={"/header"}><button type={"submit"} className={"login-submit"}>Submit</button></Link>
                </form>
            </div>
        </section>
    )
}

export default Login;