import React, { Component } from 'react';

import {
	Form,
	FormGroup,
	Label,
	Input,
	Button,
	FormFeedback
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import { createPost } from '../actions';

import '../styles/posts_new.css';

class PostsNew extends Component {
	constructor(props){
		super(props);

		this.renderField = this.renderField.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount(){
		// update header title
	}

	onSubmit(values){
		const { createPost, history } = this.props;

		// call an action
		// pass 'values' as an object {...} & goHomeCB
		createPost(values, () => history.push('/'));

		// goBack to home page
		// function goHomeCB(){
		// 	history.push('/');			
		// }
	}

	renderField(field){
		const { meta: { touched, error }, label, types } = field;

		return(
			<div>
				<Label for={label}>{label} <small><span style={{color:'red'}}>*</span></small></Label>
				<Input 
				id={label}
				type={types}
				{...field.input}
				invalid={(touched && error) ? true:false}
				/>
				{(touched && error) ? <FormFeedback>{error}</FormFeedback>: ''}
			</div>
		);
	}

	render(){
		const { handleSubmit } = this.props;

		return(
			<div>
				<center><h1 style={{marginBottom: '1rem'}}>Posts</h1></center>
				<Form onSubmit={handleSubmit(this.onSubmit)}>
					<FormGroup>
						<Field
						label="Title"
						types="text"
						name="title"
						component={this.renderField}
						/>
					</FormGroup>
					<FormGroup>
						<Field
						label="Categories"
						types="text"
						name="categories"
						component={this.renderField}
						/>
					</FormGroup>
					<FormGroup>
						<Field
						label="Content"
						types="textarea"
						name="content"
						component={this.renderField}
						/>
					</FormGroup>
					<Button className="new-posts-btn" color="primary" type="submit">Submit</Button>
					<Link className="new-posts-btn" to="/"><Button color="danger">Cancel</Button></Link>
				</Form>
			</div>
		);
	}
}


function validate(values){
	const errors = {};

	if(!values.title){ errors.title = 'Title field required' }

	if(!values.categories){ errors.categories = 'Categories field required' }

	if(!values.content){ errors.content = 'Content field required' }

	return errors;
}


PostsNew = reduxForm({
	validate,
	form: 'PostsNewForm'
})(
	connect(null, {
		createPost
	})(PostsNew)
);

export default PostsNew;