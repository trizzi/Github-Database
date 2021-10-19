import React, { useEffect } from 'react';
const User = ({ loading, getUser, user, match }) => {
	useEffect(() => {
		getUser(match.params.login);
		// eslint-disable-next-line
	}, []);
	const {
		name,
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
	return (
		<div>
			<h1>{name}</h1>
		</div>
	);
};

export default User;
