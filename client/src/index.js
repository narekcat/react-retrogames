import '../dist/css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

// Don't forget to add your API key
filepicker.setKey("AWI23Z8ihSbWRqOQVVatgz");

// Our views are rendered inside the #content div
ReactDOM.render(
    Routes,
    document.getElementById('content')
);
