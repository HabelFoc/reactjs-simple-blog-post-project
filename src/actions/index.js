import { FETCH_POSTS } from './types';
import axios from 'axios';


export const fetchPosts = () => {

	// api querying
	const ROOT_URL = 'http://reduxblog.herokuapp.com';
	const API_KEY = 'TEST321098';

	return async (dispatch) => {
		try {

			axios
			.get(`${ROOT_URL}/api/posts?${API_KEY}`)
			.then(res => dispatch({
				type: FETCH_POSTS,
				payload: res.data
			}));

		}catch(error){
			console.log('an axios requests failed...');
		}
	};

}