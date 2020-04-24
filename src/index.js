import React from 'react';
import ReactDOM from 'react-dom';
imprort * as serviceWorker from './serviceworker';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
