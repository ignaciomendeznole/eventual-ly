import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { eventsReducer } from './eventsReducer';

export const rootReducer = combineReducers({
  authReducer,
  eventsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
