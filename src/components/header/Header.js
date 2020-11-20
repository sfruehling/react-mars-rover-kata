import React from "react";
import './header.css'
import andrena_logo from './andrena_logo.jpg';

export function Header() {
    return (
        <header>
            <div className="headline">
                    <img src={andrena_logo} id="logo2" alt="andrena objects"/>
                    <h1>Mars Rover Kata</h1>
                    <img src={andrena_logo} id="logo1" alt="andrena objects"/>
            </div>
        </header>);
}