import { createStore, compose, applyMiddleware } from 'redux';
import multi from 'redux-multi';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import rootReducer from 'reducers';
import DevTools from 'containers/dev-tools';
let middleware = [multi, thunk];

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }

  return store;
}
