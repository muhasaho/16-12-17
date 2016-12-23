import React from 'react';
import ReactDom from 'react-dom'
import './main.css'
import App from './components/app'

const rootElement = <App/>;
ReactDom.render(rootElement, document.getElementById("root"));