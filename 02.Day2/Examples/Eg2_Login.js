import { useState } from "react";

function Login()
{
    const [uname, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");

    function handleUnameChange(event)
    {
        setUname(event.target.value);
    }

    function handlePasswordChange(event)
    {
        setPassword(event.target.value);
    }

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
                    User Name : <input onChange={handleUnameChange} type="text" />
                    <br /> <br />

                    Password : <input onChange={handlePasswordChange}  type="password" />
                    <br /> <br />

                    <input type="button" onClick={buttonClick} value="Login" />
                    <p>{result}</p>
                </fieldset>

            </>
        );
    
}


export default Login;
