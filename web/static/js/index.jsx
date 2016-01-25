import "phoenix_html";
import React from 'react';
import ReactDom from 'react-dom';
import configureStore from 'store/configure-store';
import Root from 'containers/root';

const store = configureStore();


ReactDom.render(
  <Root store={store} />,
  document.getElementById('root')
);