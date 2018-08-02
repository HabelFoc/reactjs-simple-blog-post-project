import { FETCH_POSTS, CREATE_POST, FETCH_POST } from '../actions/types';
import _ from 'lodash';


const initialState = {

};


export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_POST:
			return { [action.payload.id]: action.payload };
		case FETCH_POSTS:
			return _.mapKeys(action.payload, 'id');
		default:
			return state;
	}
}