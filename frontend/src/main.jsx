import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Provider को इम्पोर्ट करें
import store from './store'; // अपने स्टोर को इम्पोर्ट करें
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
