import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const users = [ 
    { name:"Heniu", id: "12345"}, 
    { name: "Hans", id: "54321"} 
];

ReactDOM.render( <App users={users}/>, document.getElementById('root') );


