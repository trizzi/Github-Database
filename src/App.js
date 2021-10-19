import React, { useState } from 'react';
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
import axios from 'axios';
import './App.css';

const App = () => {
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState({});
	const [loading, setloading] = useState(false);
	const [alert, setAlert] = useState(null);

	// Search Users
	const searchUsers = async (text) => {
		setloading(true);

		const res =
			await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		setUsers(res.data.items);
		setloading(false);
	};

	// Get Single User
	const getUser = async (username) => {
		setloading(true);

		const res =
			await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

		setUser(res.data);
		setloading(false);
	};

	// clear users
	const clearUsers = () => {
		setUsers([]);
		setloading(false);
	};

	// set Alert
	const showAlert = (msg, type) => {
		setAlert({ msg, type });

		setTimeout(() => setAlert(null), 5000);
	};

	return (
		<Router>
			<div className='App'>
				<Navbar
					title='Github Finder'
					icon='fab fa-github'
				/>
				<div className='container'>
					<Alert alert={alert} />
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<>
									<Search
										searchUsers={searchUsers}
										clearUsers={clearUsers}
										showClear={
											users.length > 0 ? true : false
										}
										setAlert={showAlert}
									/>
									<Users loading={loading} users={users} />
								</>
							)}
						/>
						<Route exact path='/about' component={User} />
						<Route
							exact
							path='/user/:login'
							render={(props) => (
								<User
									{...props}
									getUser={getUser}
									user={user}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</div>
		</Router>
	);
};

export default App;
