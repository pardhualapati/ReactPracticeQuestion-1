import React from "react";
import ReactDOM from "react-dom";

var styleSheet = {};
var message = "";
const today = new Date();
const time = today.getHours();
if (time >= 0 && time < 12) {
  message += "Good Morning";
  styleSheet = { color: "red" };
} else if (time >= 12 && time < 18) {
  message += "Good Afternoon";
  styleSheet = { color: "green" };
} else {
  message += "Good evening";
  styleSheet = { color: "blue" };
}

ReactDOM.render(
  <div>
    {" "}
    <h1 style={styleSheet}>{message}</h1>
  </div>,
  document.getElementById("root")
);
