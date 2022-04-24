import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const WithRouter = (Component) => {
	const ComponentHoC = (props) => {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();

		return <Component {...props} router={{ location, navigate, params }} />;
	};

	return ComponentHoC;
};

export default WithRouter;
