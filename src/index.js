import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import players from './players.json';

ReactDOM.render(<App players={players} />, document.getElementById('root'));
registerServiceWorker();
