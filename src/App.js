import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Page/Nav';
import NavSlide from './Page/NavSlide';
import About from './Page/About';
import Detail from './Page/Detail';
import Service from './Page/Service';
import Contact from './Page/Contact';

import Home from './Page/Home.js';
import Error from './Page/Error.js';
import Gallery from './Page/Gallery.js';




function App() {
  return (
    <>
   
    <Routes>
    <Route exact path='/' Component={Home} />
    <Route exact path='/about' Component={About} />
    <Route exact path='/contact' Component={Contact} />
    <Route exact path='/services' Component={Service} />
    <Route exact path='/gallery' Component={Gallery} />
    <Route path='/*' Component={Error} />
    </Routes>
    
    </>
  );
}

export default App;
