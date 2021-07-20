import "./components/simpleButton1/simpleButton1"
import './App.css';
import FunkyButton1 from "./components/simpleButton1/simpleButton1";
import React from 'react';

function App() {
    return (
        <div className="App">
            <FunkyButton1 buttonColour={"info"} text={"New Button"} rounded={true}/>
        </div>
    );
}

export default App;
