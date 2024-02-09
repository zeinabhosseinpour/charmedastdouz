import React from "react";
import ReactDOM from "react-dom/client";

// component
import App from "./App.jsx";

// style
import "./index.css";
import "./colorPallet.css";
import "./fonts/webfonts/Vazirmatn[wght].woff2";

// package
import { Provider } from "react-redux";
import store from "./Store/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
