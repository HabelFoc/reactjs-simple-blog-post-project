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
		this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, post => {
			return(
				<Link to="/posts/detail" key={post.id}>
					<ListGroupItem 
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
				</Link>
			);
		})
	}

	render(){
		return(
			<div>
				<center><h1 style={{marginBottom: '2rem'}}>Posts</h1></center>
				<ListGroup>
					{this.renderPosts()}
				</ListGroup>
				<Link to="/posts/new"><Button block>New Post</Button></Link>
			</div>
		);
	}
}

const mapStateToProps = ({ posts }) => ({
	posts: posts
});

export default connect(mapStateToProps, { fetchPosts })(Posts);