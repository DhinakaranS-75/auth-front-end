import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { SidebarProvider } from "./context/sidebarContext";
import { MealProvider } from "./context/mealContext";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SidebarProvider>
    <MealProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MealProvider>
  </SidebarProvider>
);
