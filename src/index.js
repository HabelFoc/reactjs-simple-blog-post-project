import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Posts from './components/posts';
import PostDetail from './components/posts_detail';
import PostNew from './components/posts_new';

import 'bootstrap/dist/css/bootstrap.min.css';
import { 
	Container,
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';

import  { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


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
						<Navbar color="light" light expand="md">
							<Container>
								<Link to="/"><NavbarBrand>MyBlogDotCom</NavbarBrand></Link>
								<Nav>
									<NavItem>
										<Link to="posts/new"><NavLink>New Posts</NavLink></Link>
									</NavItem>
								</Nav>
							</Container>
						</Navbar>

						<Container className="mt-5">

							<Switch>
								<Route exact path="/" component={Posts} />
								<Route path="/posts/new" component={PostNew} />
								<Route path="/posts/detail" component={PostDetail} />
								<Route component={() => <div>Page Not Found</div>} />
							</Switch>
							
						</Container>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#myApp'));