import { FETCH_POSTS } from '../actions/types';
import _ from 'lodash';


const initialState = {

};


export default (state = initialState, action) => {
	switch(action.type){
		case FETCH_POSTS:
			return _.mapKeys(action.payload, 'id');
		default:
			return state;
	}
}