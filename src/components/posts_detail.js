import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsDetail extends Component {
	render(){
		return(
			<div>
				<center>
					<h1>Post Detail</h1>
					<Link to="/">Home</Link>
				</center>
			</div>
		);
	}
}


export default PostsDetail;