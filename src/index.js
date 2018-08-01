import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Posts from './components/posts';
import PostDetail from './components/post_detail';

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
					<div>
						<Route path="/detail" component={PostDetail} />
						<Route exact path="/" component={Posts} />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#myApp'));