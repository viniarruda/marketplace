import React from 'react';
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import Reducers from './store/reducers'
import Root from './routes/root'

import registerServiceWorker from './registerServiceWorker'

let store = createStore(Reducers, applyMiddleware(thunk, promiseMiddleware()));

render(
    <Root store={store} />, 
    document.getElementById('root')
);
registerServiceWorker();
