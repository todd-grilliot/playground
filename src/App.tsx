import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App-header flex flex-col justify-start items-start min-h-screen text-white bg-sky-950">
            <div>
                <h1 className="text-3xl font-bold text-white">Hello World!</h1>
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p className="py-12">Hello World!</p>
        </div>
    );
}

export default App;
