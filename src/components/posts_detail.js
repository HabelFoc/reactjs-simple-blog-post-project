import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

import {
	Container,
	BreadCrumb,
	BreadCrumbItem,
	Button
} from 'reactstrap';

class PostsDetail extends Component {
	constructor(props){
		super(props);

		this.renderContent = this.renderContent.bind(this);
	}

	componentDidMount(){
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	renderContent(){
		const { post } = this.props;
		if(post === undefined){
			console.log(post);
			return (<div>Loading...</div>);
		}else{
			const { title, categories, content } = post;
			return(
				<div>
					<BreadCrumb>
						<BreadCrumbItem>{title}</BreadCrumbItem>
					</BreadCrumb>
					<BreadCrumb>
						<BreadCrumbItem>{categories}</BreadCrumbItem>
					</BreadCrumb>
					<BreadCrumb>
						<BreadCrumbItem>{content}</BreadCrumbItem>
					</BreadCrumb>
				</div>
			);
		}
	}

	render(){
		console.log(this.props.post)
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