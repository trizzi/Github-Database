import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
	return (
		<GithubState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar
							title='Github Database'
							icon='fab fa-github'
						/>
						<div className='container'>
							<Alert />
							<Switch>
								<Route
									exact
									path='/'
									render={(props) => (
										<>
											<Search />
											<Users />
										</>
									)}
								/>
								<Route
									exact
									path='/about'
									component={About}
								/>
								<Route
									exact
									path='/user/:login'
									component={User}
								/>
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</GithubState>
	);
};

export default App;
