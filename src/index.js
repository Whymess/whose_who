
// Local Denpendenices
import {AppContainer} from './Containers/index';
import './CSS/Base.css';
import store from './store';


// dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

render(
	<Provider store={store}>
   		 <AppContainer />
  	</Provider>,

  document.getElementById('root')
);