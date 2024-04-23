import React, { useState } from 'react';
import ChildComponent from './components/ChildComponent';


// Step1
export var userContext = React.createContext(null);


function App() {

  let [userObj, setUserObj] = useState({ name: "Scott", age: 25, email: "scott@gmail.com" });


  return (
    <>
      <div style={{ margin: "10px", border: "2px solid Blue" }}>
        <h3>This is the Parent Component</h3>
        <hr />
        {/*  Step2   */}
        <userContext.Provider value={userObj}>
          <ChildComponent />
        </userContext.Provider>
      </div>
    </>
  );
}

export default App;
