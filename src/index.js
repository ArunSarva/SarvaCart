import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// ReactDOM.render(<App />, document.getElementById('root'));



import cartReducer from './Reducer/CartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

