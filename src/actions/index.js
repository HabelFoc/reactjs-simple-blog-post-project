import { FETCH_POSTS, CREATE_POST, FETCH_POST } from './types';
import axios from 'axios';


// Setup API querying
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=HABELFOC';


export const fetchPosts = () => {

	return async (dispatch) => {
		try {

			axios
			.get(`${ROOT_URL}/posts${API_KEY}`)
			.then(res => dispatch({
				type: FETCH_POSTS,
				payload: res.data
			}));

			console.log('Fetch posts successful!');

		}catch(error){
			console.log('an axios requests failed...:fetchPosts');
		}
	};

} // END OF 'fetchPosts' action


export const createPost = (values, callback) => {

	// axios request
	return async (dispatch) => {
		try{
			axios
			.post(`${ROOT_URL}/posts${API_KEY}`, values)
			.then(res => {

				dispatch({
					type: FETCH_POSTS,
					payload: res.data
				});
				console.log('Success! Post created!');
				callback(); // upon success? => back to home page!

			});
		}catch(err){
			console.log('an axios requests failed...:createPost');
		}
	};

} // END OF 'createPost' action


export const fetchPost = (id) => {

	return async (dispatch) => {

		try{
			axios
			.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
			.then(res => {
				
				dispatch({
					type: FETCH_POST,
					payload: res.data
				});
				
				console.log('fetchPost request successful!');

			});

		}catch(err){
			console.log('an axios requests failed...:fetchPost');
		}

	}

} // END OF 'fetchPost' action