import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import './css/navbar.css'
import './css/movies.css';
import './css/index.css';
import './css/media.css';
import { applyMiddleware, createStore } from "redux";
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(thunk));



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
