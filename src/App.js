import React, { useState, useEffect } from 'react';
import './App.css';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

const [state, setState] = useState({
        luke: "",
        c3po: "",
        r2d2: "",
        vader: "",
        leia: "",
        owen : "",
        beru : "",
        r5d4: "",
        biggs: "",
        obiwan: ""


})

useEffect (  () => {
    fetchApod();
}, []);

function fetchApod() {
    axios.get('https://swapi.co/api/people/')
    .then((response) => {
      console.log(respone.data);
      setState(response.data);
    })
     
    .catch(error => console => (error))
  
    }
 

return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <img {state.luke} />
    </div>
  );
}

console.log(axios);

export default App;
