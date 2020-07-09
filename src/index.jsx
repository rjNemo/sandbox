import React from "react";
import ReactDom from "react-dom";
import "./styles/global.scss";
import App from "./pages/_app";
import * as serviceWorker from "./serviceWorker";

ReactDom.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
