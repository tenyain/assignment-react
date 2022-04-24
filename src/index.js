import React from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import RootReducer from './modules';
import App from "./App";
import './index.css';

const store = createStore(
    RootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Provider store={store}>
    <App/>
</Provider>
);