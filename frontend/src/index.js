import React from 'react';
import ReactDOM from 'react-dom/client';

import {setupStore} from "./redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./app";
import {history} from "./services/api.service";


const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
