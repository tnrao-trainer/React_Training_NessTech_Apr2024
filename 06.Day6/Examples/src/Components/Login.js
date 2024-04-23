import React, {useEffect, useState} from 'react';
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Login(props) {   

    const [uid, setUserId]  = useState("admin");
    const [pwd, setPassword]  = useState("admin123");
    const [result, setResult]  = useState(""); 

    let navigate = useNavigate();
    let location = useLocation();

    function loginButton_click()
    {  

      const queryString = location.search; // returns the query string from the current url
      // let strReturnUrl  =  new URLSearchParams(search).get('key');
       let strReturnUrl  =  new URLSearchParams(queryString).get('returnUrl');
     //  alert(strReturnUrl);

     if(strReturnUrl == null)
     {
      strReturnUrl = "/";
     }


        if(uid == "admin" && pwd == "admin123")
        {  
          // alert("Valid Credentials");

          // In real-time apps, we will get the token from the server
          // JWT token is the popular token generation library          
          let token = "ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS";
          sessionStorage.setItem('AUTH_TOKEN', token)
          navigate(strReturnUrl);
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }


  return (
    <>   
      <fieldset>
                <legend>User Login</legend>

                <label>User Id  : </label>
                <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                <br/><br/>

                <label>Password  : </label>
                <input type="password"  value={pwd}  onChange={(event) => setPassword(event.target.value)} />
                <br/><br/>

                <input type="button"  onClick={loginButton_click}  value="Login"    />
                <p  style={{color : "red"}}>{result}</p>   
       </fieldset>  
    </>
  );

}

export default Login;
