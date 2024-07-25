import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import theme from "./mui/theme.js";
import "./styles/index.css";
import "./styles/font.css";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
