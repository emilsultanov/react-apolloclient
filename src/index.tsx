import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./configs/apolloClientConfig";


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App/>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
