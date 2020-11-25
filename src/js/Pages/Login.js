import React from "react";

const Login = () => {
    return (
        <section className={"login-container"}>
                <h2 className={"login-text"}> Sign in ;)</h2>
                <form className={"login-form"}>
                    <input type="text" id="login-name" name="name" placeholder={"Your name or email"}/>
                    <input type="password" id="login-password" name="password" placeholder={"Password"}/>
                    <button type={"submit"} className={"login-submit"}>Submit</button>
                </form>
        </section>
    )
}

export default Login;