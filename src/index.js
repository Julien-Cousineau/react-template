import 'antd/dist/antd.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Root from './components/Root';
import reducers from './reducers';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(reducers, middleware);

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
