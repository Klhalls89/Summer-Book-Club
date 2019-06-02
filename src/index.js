import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import { rootReducer } from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = composeWithDevTools();

const store = createStore(rootReducer, devTools);

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' render={() => <App />} />
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));



