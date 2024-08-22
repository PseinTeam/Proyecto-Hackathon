import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import RoutesComponent from "./routes/routes.jsx";
import { WebSocketProvider } from "./context/WebSocketContext.jsx";
import { NotificationProvider } from "./context/NotificationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WebSocketProvider>
        <NotificationProvider>
          <RoutesComponent />
        </NotificationProvider>
      </WebSocketProvider>
    </BrowserRouter>
  </StrictMode>
);
