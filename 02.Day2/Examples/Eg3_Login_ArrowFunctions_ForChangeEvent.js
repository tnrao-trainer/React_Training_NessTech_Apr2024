import { useState } from "react";

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    
    function buttonClick() {
        if (uname == "admin" && password == "admin123") 
        {
            setResult("Welcome to Admin");
        }
        else {
            setResult("Invalid User Id or Password");
        } 
    }

 
        return (
            <>
                <h3>Working with Functional Components in React JS</h3>
                <hr />

                <fieldset>
                    <legend>User Login</legend>
                    User Name : <input onChange={ (e) => { setUname(e.target.value) } } type="text" />
                    <br /> <br />

                    Password : <input onChange={ (e) => { setPassword(e.target.value) } }  type="password" />
                    <br /> <br />

                    <input type="button" onClick={buttonClick} value="Login" />
                    <p>{result}</p>
                </fieldset>

            </>
        );
    
}


export default Login;
