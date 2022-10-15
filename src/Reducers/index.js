import {combineReducers} from 'redux';
import { blogReducer } from './BlogReducer';
import { commentsReducer } from './CommentsReducer';

const rootReducer = combineReducers({blogReducer , commentsReducer});
export default rootReducer; 