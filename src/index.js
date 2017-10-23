
// Local Depn
import App from './Components/App/App';
import './CSS/Base.css';
import store from './store';


// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render(
	<Provider store={store}>
   		 <App />
  	</Provider>,

  document.getElementById('root')
);