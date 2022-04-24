import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/vendor/fontawesome5/css/all.min.css';
import '../styles/Base.scss';
import Main from './Main';
import Home from './Main/Pages/Home';
import Todos from './Main/Pages/Todos';
import NotFound from './Main/Layouts/NotFound';
import Login from './User/Login';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Routes>
						<Route path="/" element={<Main />}>
							<Route index element={<Home />} />
							<Route path="todos" element={<Todos />} />
						</Route>
						<Route path="404" element={<NotFound />} />
						<Route path="*" element={<Navigate to="404" />} />
					</Routes>
				</Router>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</>
		);
	}
}

export default App;
