import React, { Component } from "react";
import ReactDOM from "react-dom";

import './main.scss'

function MyComponent(){
    return (
        <div>MyComponent Opa .doido</div>
    );
}

ReactDOM.render(
    <MyComponent></MyComponent>,
    document.getElementById('root')
  );