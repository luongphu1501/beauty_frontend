import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import store from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "bootstrap/dist/css/bootstrap.css";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <ProSidebarProvider>
          <Layout />
        </ProSidebarProvider>

      </PersistGate>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
