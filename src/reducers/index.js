import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './posts_reducer';


export default combineReducers({
	posts: PostsReducer,
	form: formReducer
})