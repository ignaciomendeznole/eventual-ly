import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { eventsReducer } from './eventsReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
  authReducer,
  eventsReducer,
  uiReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
