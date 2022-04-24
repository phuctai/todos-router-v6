import React from 'react';
import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import WithRouter from '../hoc/WithRouter';

class RequireAuth extends React.Component {
	render() {
		const { isLoggedIn, router } = this.props;
		const { location } = router;
		const back = (location.pathname !== '/' && `?back=${location.pathname}`) || '';
		return <>{isLoggedIn ? <Outlet /> : <Navigate to={`login${back}`} replace />}</>;
	}
}

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(WithRouter(RequireAuth));
