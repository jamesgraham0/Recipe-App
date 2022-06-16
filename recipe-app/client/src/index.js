import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);
// The <Provider> component makes the Redux store available to any nested components that need to access the Redux store https://react-redux.js.org/api/provider
//StrictMode is a dev tool used for highlighting problematic code in React