import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

import { Container, Button, Jumbotron } from 'reactstrap';


class PostsDetail extends Component {
	constructor(props){
		super(props);

		this.renderContent = this.renderContent.bind(this);
	}

	componentDidMount(){
		const postId = this.props.match.params.id;
		this.props.fetchPost(postId);
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

	render(){
		return(
			<div>
				<Container>
					<center><h1 style={{marginBottom: '1rem'}}>Posts Detail</h1></center>
					<Link to="/"><Button color="primary">Go Back</Button></Link>
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

export default connect(mapStateToProps, { fetchPost })(PostsDetail);