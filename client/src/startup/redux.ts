import { createStore, combineReducers } from 'redux';

import modal from 'ducks/modal';

const rootReducer = combineReducers({
  modal,
});

const store = createStore(rootReducer);

export default store;
