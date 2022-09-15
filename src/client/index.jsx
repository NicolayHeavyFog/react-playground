import * as React from "react";
import * as ReactDOM from "react-dom";

window.addEventListener("load", () => {
  ReactDOM.hydrate(<Header />, document.getElementById("react_root"));
});
