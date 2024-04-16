import React from 'react';

class Login extends React.Component {
    constructor() {
        super();
        this.state = { uname: "", password: "", result: "" };
        this.buttonClick = this.buttonClick.bind(this);
        this.handleUnameChange = this.handleUnameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleUnameChange(event)
    {
        this.setState({uname  : event.target.value});
    }

    handlePasswordChange(event)
    {
        this.setState({password  : event.target.value});
    }

    buttonClick() {

        if (this.state.uname == "admin" && this.state.password == "admin123") 
        {
            this.setState({ result  : "Welcome to Admin"} );
        }
        else {
            this.setState({ result  : "Invalid User Id or Password"} );            
        }

       
    }





    render() {

        return (
            <>
                <h3>Working with Class Components in React JS</h3>
                <hr />

                <fieldset>
                    <legend>User Login</legend>
                    User Name : <input onChange={this.handleUnameChange} type="text" />
                    <br /> <br />

                    Password : <input onChange={this.handlePasswordChange}  type="password" />
                    <br /> <br />

                    <input type="button" onClick={this.buttonClick} value="Login" />
                    <p>{this.state.result}</p>
                </fieldset>

            </>
        );
    }
}


export default Login;
