import React from 'react';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReactDOM from 'react-dom';
import cocktailsApp from './store/reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

const loggerMiddleware = createLogger()
const store = createStore(cocktailsApp,
    applyMiddleware(thunkMiddleware, loggerMiddleware),
)

ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
