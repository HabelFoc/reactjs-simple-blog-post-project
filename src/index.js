import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Posts from './components/posts';
import PostDetail from './components/posts_detail';
import PostNew from './components/posts_new';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

import  { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';


// dev-server hot reloading
if (module.hot){
    module.hot.accept()
}


class App extends Component {

	render(){
		return(
			<Provider store={store} >
				<BrowserRouter>
					<Container className="mt-5">
						<Route path="/posts/new" component={PostNew} />
						<Route path="/posts/detail" component={PostDetail} />
						<Route exact path="/" component={Posts} />
					</Container>
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#myApp'));