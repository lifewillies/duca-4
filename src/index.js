import React from 'react'; 
import ReactDom from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom'; 
import App from './App'; 
import './index.css'; 
import { createRoot } from 'react-dom/client';  


createRoot(document.getElementById('root')).render(<App />); 


/*ReactDom.render(<App />, document.getElementById('root')); */
