import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import routesReducer from './routes_reducer';
import activitiesReducer from './activities_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  routes: routesReducer,
  activities: activitiesReducer,
});

export default rootReducer;
