import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/routes.jsx";
import { WebSocketProvider } from "./context/WebSocketContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { LoadingProvider } from "./context/LoadingContext.jsx"; // Importar el LoadingProvider

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoadingProvider>
      <BrowserRouter>
        <AuthProvider>
          <WebSocketProvider>
            <NotificationProvider>
              <RoutesComponent />
            </NotificationProvider>
          </WebSocketProvider>
        </AuthProvider>
      </BrowserRouter>
    </LoadingProvider>
);
