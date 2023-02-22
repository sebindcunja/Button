import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import About from './components/About';
import App from './App';
import FavC from './components/Sebin';
import Boat from './components/boat';
import Car from './components/car';
import Garage from './components/garage';
import State from './components/state';
import { BrowserRouter } from 'react-router-dom';
import Navmenu from './components/Navmenu';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Parent from './component-2/parent';


// var num=[0,6,9,10];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Navmenu items={num}/> */}
    {/* <Car color="blue" />
    <Garage paint="red" /> */}
{/* <App />     */}
{/* <BrowserRouter>
<Home/>
</BrowserRouter> */}
 <Parent/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
