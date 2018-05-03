import React from 'react';
import ReactDOM from 'react-dom';
import Root  from './components/Root';
import store from './store'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
// registerServiceWorker();
