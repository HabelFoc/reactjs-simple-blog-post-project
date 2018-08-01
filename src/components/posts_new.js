import React, { Component } from 'react';

import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'

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
		console.log(values);
	}

	renderField(field){
		console.log(field.meta)
		return(
			<div>
				<Label for="title">{field.label} <span style={{color:'red'}}>*{field.meta.touched ? field.meta.error : ''}</span></Label>
				<Input 
				id="title"
				type="text"
				{...field.input}
				/>
			</div>
		);
	}

	render(){
		const { handleSubmit } = this.props;

		return(
			<div>
				<center><h1 style={{marginBottom: '2rem'}}>Posts</h1></center>
				<Form onSubmit={handleSubmit(this.onSubmit)}>
					<FormGroup>
						<Field
						label="Title"
						name="title"
						component={this.renderField}
						/>
					</FormGroup>
					<FormGroup>
						<Field
						label="Categories"
						name="categories"
						component={this.renderField}
						/>
					</FormGroup>
					<FormGroup>
						<Field
						label="Content"
						name="content"
						component={this.renderField}
						/>
					</FormGroup>
					<Button type="submit">Submit</Button>
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
})(PostsNew)

export default PostsNew;