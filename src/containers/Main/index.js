import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { appActions } from '../../store/actions/rootActions';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

class Main extends Component {
	handleChangeLanguage = (language) => {
		this.props.changeLanguage(language);
	};

	render() {
		const language = this.props.language;

		return (
			<>
				<Header language={language} handleChangeLanguage={this.handleChangeLanguage} />
				<div className="container py-5">
					<Outlet />
				</div>
				<Footer />
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		language: state.app.language
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeLanguage: (language) => dispatch(appActions.CHANGE_LANGUAGE(language))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
