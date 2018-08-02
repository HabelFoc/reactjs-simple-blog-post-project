import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Posts from './components/posts';
import PostsDetail from './components/posts_detail';
import PostsNew from './components/posts_new';

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

import './styles/index.css';

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
						<Navbar color="dark" dark expand="md">
							<Container>
								<Link className="brand" to="/"><h4>MyBlogDotCom</h4></Link>
								<Nav>
									<NavItem>
										<NavLink href="javascript:void(0)">Contact</NavLink>
									</NavItem>
								</Nav>
							</Container>
						</Navbar>

						<Container className="mt-5">

							<Switch>
								<Route path="/posts/new" component={PostsNew} />
								<Route path="/posts/detail/:id" component={PostsDetail} />
								<Route exact path="/" component={Posts} />
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