import  { useState } from 'react';

function Counter()
{

    const [counter, setCounter] = useState(1);

    function buttonClick()
    {
        setCounter(counter + 1);
    }


    return (
        <>
            <h3>Working with functional Components in React JS</h3>                    
            <hr/>

            <button  onClick={buttonClick}>Update Counter</button>   
            <h1>Counter :  {counter}</h1>

        </>
    );
}


export default Counter;
