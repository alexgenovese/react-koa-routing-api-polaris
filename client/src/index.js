import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import App from "./App";
import "@shopify/polaris/styles.css";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
        <title>Nodejs + Reactjs + Polaris</title>
        <meta name="description" content="Nodejs + Reactjs + Polaris" />
    </Helmet>
    <AppProvider i18n={enTranslations}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
