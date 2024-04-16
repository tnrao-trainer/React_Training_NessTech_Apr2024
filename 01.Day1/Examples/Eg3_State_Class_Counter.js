import React from 'react';

class Counter extends React.Component
{
    constructor()
    {
        super();
        this.state = { counter : 1};
        this.buttonClick  =  this.buttonClick.bind(this);
    }

    buttonClick()
    {        
       let x = this.state.counter  + 1; 
       this.setState({ counter : x })    
    }


   


    render(){  

        return (
            <>
                    <h3>Working with Class Components in React JS</h3>                    
                    <hr/>
                     <button  onClick={this.buttonClick}>Update Counter</button>   
                    <h1>Counter :  {this.state.counter}</h1>
                    
            </>
        );
    }
}


export default Counter;
