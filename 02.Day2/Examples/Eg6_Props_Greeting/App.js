import React from 'react';
import Hello from './components/Hello';
import Greeting from './components/Greeting';
import Login from './components/Login';
import Counter from './components/Counter';

function App() {

  let user1 = "Ramesh";
  let user2 = "Prasad";

  let usersArray =  ["Lokesh", "Srinisha", "Ramya", "Lavanya"];

  let resultArray =  usersArray.map( (item)  => 
  {
      return (
          <Greeting  uname={item} />
      );
  });

  return(
    <>
       <h3>Working with Props in React JS</h3>
       <hr/>

       <Greeting  uname="Narasimha" />
       <Greeting  uname="Naveen" />
       <Greeting  uname="Naresh" />

       <hr/>
       <Greeting  uname={user1} />
       <Greeting  uname={user2} />
       <hr/>

      
        {resultArray}
      

    </>      
  );    
}

export default App;
