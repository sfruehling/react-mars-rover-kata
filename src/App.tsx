import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {RoverGameContainer} from "./components/main/RoverGameContainer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="main">
                <RoverGameContainer/>
            </div>
        </div>
    );
}

export default App;
