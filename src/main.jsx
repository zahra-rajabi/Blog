import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@mui/material";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import theme from "./mui/theme.js";
import "./styles/index.css";
import "./styles/font.css";
import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const client = new ApolloClient({
  uri: "https://ap-northeast-1.cdn.hygraph.com/content/clytlf63j014g06w9dipua5zi/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
