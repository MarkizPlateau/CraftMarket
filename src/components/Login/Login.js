import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
const Login = () => {

    const [users, setUsers] = useState(null);
    const [name, setName] = useState("Markiz");
    const [password, setPassword] = useState("Pewu");

    const API = "http://localhost:3001";

    useEffect(()=>{
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => setUsers(data.users.map(el => el)))
            .catch(error => console.log(error))
    },[])

    const loginHandleChange = (e) => {
        console.log(e.target.name);
    }

    const passwordHandleChange= (e) => {
        console.log(e.target.password);
    }

    return (
        <section className={"login-container"}>
            <div className="app">
                <h1 className={"login-title"}> Welcome in <span>HandiCraftin Market</span></h1>
                <br/>
                <h2 className={"login-text"}> Sign in ;)</h2>
                <form className={"login-form"}>
                    <input type="text" id="login-name" onChange={loginHandleChange} name="name" placeholder={"Your name or email"}/>
                    <input type="password" id="login-password" onChange= {passwordHandleChange} name="password" placeholder={"Password"}/>
                    <Link to={"/main"}><button type={"submit"} className={"login-submit"}>Submit</button></Link>
                    {users? users.map( el => <p key={el.id}> {el.userName} </p>): <p> Nothing </p>}
                </form>
            </div>
        </section>
    )
}

export default Login;