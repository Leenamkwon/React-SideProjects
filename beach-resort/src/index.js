import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { RootContext } from './contexts/rootContext';

render(
  <RootContext>
    <App />
  </RootContext>,
  document.querySelector('#root')
);
