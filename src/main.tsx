import React from "react";
import ReactDOM from "react-dom";
const logoImg = require("./content/logo_1.png");

ReactDOM.render(
  <div>
    <h1>Hola mundo desde React</h1>
  </div>,
  document.getElementById("root")
);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);
