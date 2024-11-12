import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";
import { CameraProvider } from "./CameraContext"; // Importa el CameraProvider
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <CameraProvider> {/* Envuelve App con CameraProvider */}
          <App />
        </CameraProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
