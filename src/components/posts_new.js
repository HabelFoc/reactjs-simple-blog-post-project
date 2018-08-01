import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
	componentDidMount(){
		// update header title
	}

	render(){
		return(
			<div>
				<center>
					<h1>Post New</h1>
					<Link to="/">Home</Link>
				</center>
			</div>
		);
	}
}


export default PostsNew;