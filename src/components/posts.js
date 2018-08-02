import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import '../styles/posts.css';

class Posts extends Component {
	constructor(props){
		super(props);

		this.renderPosts = this.renderPosts.bind(this);
	}

	componentDidMount(){
		console.log(this.props.posts);
		
		const posts_state = Object.keys(this.props.posts);

		// only fetch of state is empty
		if(posts_state.length < 1){ this.props.fetchPosts() }
	}

	gropItemClick(itemData){
		this.props.history.push(`/posts/detail/${itemData.id}`);
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return(
				<ListGroupItem
				onClick={this.gropItemClick.bind(this, post)}
				key={post.id} 
				style={{
					border: 'none',
				 	borderBottom: '2px solid #ccc',
				  	marginBottom: '1rem',
				  	cursor: 'pointer'
				}}
				>
						<h4>{post.title}</h4>
						<p style={{color: '#888'}}>{post.categories}</p>
				</ListGroupItem>
			);
		})
	}

	render(){
		return(
			<div style={{marginBottom: '4rem'}}>
				<center><h1 style={{marginBottom: '1rem'}}>Posts</h1></center>
				<Link to="/posts/new" style={{padding: '.75rem'}}><Button color="primary">New Post</Button></Link>
				<ListGroup style={{marginTop: '2rem'}}>
					{this.renderPosts()}
				</ListGroup>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }) => ({
	posts: posts
});

export default connect(mapStateToProps, { fetchPosts })(Posts);