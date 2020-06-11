import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";

import './index.css';

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import CartoonstoreService from './services/cartoonstore-service';
import {CartoonstoreServiceProvider} from "./components/cartoonstore-service-contex/cartoonstore-service-contex";
import store from './store/store';

const cartoonstoreService  = new CartoonstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CartoonstoreServiceProvider value={cartoonstoreService}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </CartoonstoreServiceProvider>
        </ErrorBoundry>
    </Provider>
, document.getElementById('root'));
