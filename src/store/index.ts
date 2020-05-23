import { createStore, compose, applyMiddleware, Middleware } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares: Middleware[] = [
  thunk
];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);