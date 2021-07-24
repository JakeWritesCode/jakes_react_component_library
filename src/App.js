import "./components/simpleButton1/simpleButton1"
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleButton1 from "./components/simpleButton1/simpleButton1.js";
import Navbar1 from "./components/navbar1/navbar1";

function App() {
    return (

        <div className="container">
            <div className="row mb-3">
                <div className="col-12">
                    <h1>Jakes React Component Library</h1>
                    <p>This is a collection of random react bits i&apos;ve made (hopefully to use in some projects when
                        I get round to it).</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Buttons</h2>
                    <p>Pretty much what it says on the tin fam.</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                    <SimpleButton1 buttonColour={"primary"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"success"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"secondary"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"warning"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"info"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"danger"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"light"} text={"SimpleButton1"} rounded={false}/>
                    <SimpleButton1 buttonColour={"dark"} text={"SimpleButton1"} rounded={false}/>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <h2>Navbars</h2>
                    <p>A bunch of navbars.</p>
                </div>
            </div>
            <div className="row">
                <Navbar1 buttons={[
                    {"link": "#", "text": "Button 1"},
                    {"link": "#", "text": "Button 2"},
                ]} homeLink={"1234"}/>
            </div>
        </div>
    )
}


export default App;
