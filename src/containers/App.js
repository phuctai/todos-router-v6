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
import RequireAuth from '../components/RequireAuth';

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<Routes>
						{/* Main */}
						<Route path="/" element={<Main />}>
							{/* General */}
							<Route index element={<Home />} />

							{/* Authentication requirement */}
							<Route element={<RequireAuth />}>
								<Route path="todos" element={<Todos />} />
							</Route>
						</Route>

						{/* Authentication */}
						<Route path="login" element={<Login />} />

						{/* Not found */}
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
