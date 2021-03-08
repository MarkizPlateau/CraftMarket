import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Main from "../Main/Main";
const Login = () => {


    const [users, setUsers] = useState(null);
    const [loginInfo, setLoginInfo] = useState({
        username: "",
        password: "",
    })
    const [loged, setLoged] = useState(null)
    const API = "http://localhost:3001";

    useEffect(()=>{
        fetch(`${API}/db`)
            .then(response => response.json())
            .then(data => setUsers(data.users.map(el => el)))
            .catch(error => console.log(error))
    },[])

    const userCheck = (e) => {
        e.preventDefault();

        if (users && loginInfo.username === users[0].userLogin && loginInfo.password === users[0].userPassword) {
            console.log(`Witaj: ${users[0].userName}`);
            setLoged(prev => users[0].userName)

        } else {
            console.log("Hit")
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }


    // const {username, password} = data;
    // return new Promise((resolve, reject) => {
    //     if (username === "coderslab" && password === "qwerty") {
    //         resolve({
    //             username,
    //             name: "Jan",
    //             surname: "Kowalski",
    //             lastLogin: new Date("04/08/2019 13:20:22")
    //         });
    //     } else {
    //         reject("Hasło lub login są nieprawidłowe!");
    // setTimeout(() =>{
    //     console.log(users && users[0].userName);
    // },3000)


    return !loged ? (
        <section className={"login-container"}>
            <div className="app">
                <h1 className={"login-title"}> Welcome in <span>HandiCraftin Market</span></h1>
                <br/>
                <h2 className={"login-text"}> Sign in ;)</h2>
                <form className={"login-form"} onSubmit={userCheck}>
                    <input type="text" id="login-name" name={"username"} placeholder={"Your name or email"} value={loginInfo.username} onChange={handleChange}/>
                    <input type="password" id="login-password"  name={"password"} placeholder={"Password"} value={loginInfo.password} onChange={handleChange}/>
                    <Link to={"/main"}></Link><button type={"submit"} className={"login-submit"}>Submit</button>
                </form>
            </div>
        </section>
    ) : (
        <Main user={users[0].userName}/>
    )
}

export default Login;