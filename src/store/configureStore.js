import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';

const persistConfig = { key: 'root', storage };
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const store = createStore(
    persistedReducer,
    preloadedState,
    compose(applyMiddleware(thunk, createLogger()))
  );

  const persistor = persistStore(store);

  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(rootReducer);
  //   });
  // }

  return { store, persistor };
}
