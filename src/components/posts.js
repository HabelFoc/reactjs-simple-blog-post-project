import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';


class Posts extends Component {
	componentDidMount(){
		this.props.fetchPosts();
	}

	render(){
		console.log(this.props.posts);
		return(
			<div>
				<center><h1>Posts</h1></center>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }) => ({
	posts: posts
});

export default connect(mapStateToProps, { fetchPosts })(Posts);