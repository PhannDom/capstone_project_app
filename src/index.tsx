import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.scss";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import { ProductsProvider } from "./contexts/categories.context";

import { CartProvider } from "./contexts/cart.context";

import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider>
        <BrowserRouter>
          <ProductsProvider>
            <UserProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </UserProvider>
          </ProductsProvider>
        </BrowserRouter>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
