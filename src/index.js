import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./input.css";
import { BrowserRouter } from "react-router-dom";

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-WQXC4ZG',
    dataLayerName: "PageDataLayer"
}

TagManager.initialize(tagManagerArgs)

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
