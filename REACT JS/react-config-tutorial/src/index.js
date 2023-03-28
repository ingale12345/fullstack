import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

class Welcome extends React.Component {
  render() {
    return <h1>Demo text</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));
