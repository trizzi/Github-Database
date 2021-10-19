import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../layouts/Spinner';

const User = ({ loading, getUser, user, match }) => {
	useEffect(() => {
		getUser(match.params.login);
		// eslint-disable-next-line
	}, []);
	const {
		name,
		company,
		avatar_url,
		location,
		bio,
		blog,
		login,
		html_url,
		followers,
		following,
		public_repos,
		public_gists,
		hireable,
	} = user;
	if (loading === true) {
		return <Spinner />;
	}
	return (
		<>
			<Link to='/' className='btn btn-sm'>
				Back To Search
			</Link>
			{hireable ? (
				<i className='fas fa-check text-success' />
			) : (
				<i className='fas fa-times-circle text-danger' />
			)}
			<div className='card grid-2'>
				<div className='all-center'>
					<img
						src={avatar_url}
						className='round-img'
						alt=''
						style={{ width: '150px' }}
					/>
					<h1>{name}</h1>
					<p>Location : {location}</p>
				</div>
				<div>
					{bio && (
						<>
							<h3>Biograph</h3>
							<p>{bio}</p>
						</>
					)}
					<Link to={html_url} className='m-1 btn btn-dark'>
						Visit Github Profile
					</Link>
					<ul>
						<li>
							{login && (
								<>
									<strong>Username :</strong>
									{login}
								</>
							)}
						</li>
						<li>
							{company && (
								<>
									<strong>Company :</strong>
									{company}
								</>
							)}
						</li>
						<li>
							{blog && (
								<>
									<strong>Website :</strong>
									{blog}
								</>
							)}
						</li>
					</ul>
				</div>
			</div>

			<div className='card text-center'>
				<div className='badge badge-primary'>
					Followers: {followers}
				</div>
				<div className='badge badge-dark'>
					Following: {following}
				</div>
				<div className='badge badge-danger'>
					Public Repose: {public_repos}
				</div>
				<div className='badge badge-success'>
					Followers: {public_gists}
				</div>
			</div>
		</>
	);
};

export default User;
