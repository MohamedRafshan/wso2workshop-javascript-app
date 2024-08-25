import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "@asgardeo/auth-react";
import asgardeoConfig from "./asgardeoConfig";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider config={asgardeoConfig}>
      <App />
    </AuthProvider>
    </React.StrictMode>
      );
