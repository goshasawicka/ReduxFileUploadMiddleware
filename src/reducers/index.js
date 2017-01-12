import { combineReducers } from 'redux';
import FileReducer from './reducer_files';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  files: FileReducer,
  form: formReducer,
});

export default rootReducer;
