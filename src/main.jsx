import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://ap-northeast-1.cdn.hygraph.com/content/clytlf63j014g06w9dipua5zi/master",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
