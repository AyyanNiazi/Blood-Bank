import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux'
import store from './store/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <MuiThemeProvider> 
    <Provider store={store}> 
        <App /> 
    </Provider>
    </MuiThemeProvider>
 , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
