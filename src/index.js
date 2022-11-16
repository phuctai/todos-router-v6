import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux';
import IntlProviderHoC from './hoc/IntlProviderHoC';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<IntlProviderHoC>
					<App />
				</IntlProviderHoC>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
