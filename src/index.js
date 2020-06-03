import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Image from "./imgContainer";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Image
      src="http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
      alt="CATSSSS"
    />
  </React.StrictMode>,
  rootElement
);
