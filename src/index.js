import React from 'react';
import ReactDOM from 'react-dom/client';  // ✅ Use createRoot for React 18
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { addUser } from './actions'
import createSagaMiddleware from 'redux-saga';

import './index.css';
import App from './App';

// Remove if registerServiceWorker.js does not exist
// import registerServiceWorker from './registerServiceWorker';

import setupSocket from './sockets';
import reducers from './reducers';
import handleNewMessage from './sagas';
import username from './utils/name';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

store.dispatch(addUser('Me'))

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

const root = ReactDOM.createRoot(document.getElementById('root'));  // ✅ React 18 method
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If registerServiceWorker.js exists, uncomment the line below
// registerServiceWorker();
