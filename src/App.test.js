import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/store';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
