import React from "react";
import ReactDOM from "react-dom/client";

{/* 
<div id="parent">
    <div id="child">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
    <div id="child2">
        <h1>h1 tag</h1>
        <h2>h2 tag</h2>
    </div>
</div> */}

const parent = React.createElement("div", {id: "parent"},
    [React.createElement("div", {id: "child"},[  //array of children
        React.createElement("h1", {},"h1 tag"),
        React.createElement("h2", {},"h2 tag"),
    ]),
    React.createElement("div", {id: "child2"},[  //array of children
            React.createElement("h1", {},"h1 tag"),
            React.createElement("h2", {},"h2 tag")
        ]
    )]   
);
console.log(parent);


// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz:"abc"}, 
//     "Welcome to React");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);