import React from 'react';
import ReactDom from 'react-dom';
import configureStore from 'store/configureStore';
import Root from 'containers/Root';

const store = configureStore();


ReactDom.render(
  <Root store={store} />,
  document.getElementById('root')
);