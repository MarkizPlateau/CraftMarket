import React from "react";
import {Link} from "react-router-dom";
const Login = () => {

    const API = "http://localhost:3001";

    fetch(`${API}/db`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });

    return (
        <section className={"login-container"}>
            <div className="app">
                <h1 className={"login-title"}> Welcome in <span>HandiCraftin Market</span></h1>
                <br/>
                <h2 className={"login-text"}> Sign in ;)</h2>
                <form className={"login-form"}>
                    <input type="text" id="login-name" name="name" placeholder={"Your name or email"}/>
                    <input type="password" id="login-password" name="password" placeholder={"Password"}/>
                    <Link to={"/main"}><button type={"submit"} className={"login-submit"}>Submit</button></Link>
                </form>
            </div>
        </section>
    )
}

export default Login;