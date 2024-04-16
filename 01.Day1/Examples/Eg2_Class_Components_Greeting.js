import React from 'react';

class Greeting extends React.Component
{
    constructor()
    {
        super();
        this.uname = "Scott";
    }

    render(){  

        return (
            <>
                    <h3>Working with Class Components in React JS</h3>                    
                    <hr/>
                    <>
                           User Name  :  {this.uname} 
                    </>
            </>
        );
    }
}


export default Greeting;
