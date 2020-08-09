import {combineReducers} from 'redux';
import ToDoReducers from './ToDoReducers';

export default combineReducers({
  listResponse: ToDoReducers,
});
