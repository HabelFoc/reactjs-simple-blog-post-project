import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, fetchPosts, deletePost } from '../actions';

import { Container, Button, Jumbotron, Row, Col } from 'reactstrap';


class PostsDetail extends Component {
	constructor(props){
		super(props);

		this.renderContent = this.renderContent.bind(this);
		this.onClickDeletePost = this.onClickDeletePost.bind(this);
	}

	componentDidMount(){
		const postId = this.props.match.params.id;

		// only fetch of state is empty
		if(!this.props.post) { this.props.fetchPosts() }

		// this.props.fetchPost(postId);
	}

	renderContent(){
		if(this.props.post){
			const { title, categories, content } = this.props.post;
			return(
				<div>
					<Jumbotron className="mt-4">
						<h1 className="display-3">{title}</h1>
        				<p className="lead">Categories: {categories}</p>
        				<hr className="my-2" />
        				<p>{content}</p>
					</Jumbotron>
				</div>
				
			);
		}else{
			return <div>Loading...</div>;
		}
	}

	onClickDeletePost(){
		// call action to delete specific post /w id
		const { id } = this.props.match.params;
		this.props.deletePost(id, () => this.props.history.push('/'));
	}

	render(){
		return(
			<div>
				<Container>
					<center><h1 style={{marginBottom: '1rem'}}>Posts Detail</h1></center>
					<Row>
						<Col><Link to="/"><Button color="primary">Go Back</Button></Link></Col>
						<Col sm={{size: 'auto'}}><Button color="danger" onClick={this.onClickDeletePost}>Delete Post</Button></Col>
					</Row>
				
					{this.renderContent()}
				</Container>
			</div>
		);
	}
}


function mapStateToProps({posts}, ownProps){
	console.log(posts[ownProps.match.params.id]);
	return {
		post: posts[ownProps.match.params.id]
	}
};

export default connect(mapStateToProps, { fetchPost, fetchPosts, deletePost })(PostsDetail);