import React from 'react';
import { Navbar, Footer} from './components';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Home,Products,Services, Clients} from './pages';
const App = () => {
  return (
  <Router>
  <Navbar/>
  <GlobalStyle/>
  <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/clients' element={<Clients/>}/>
  </Routes>
  <Footer/>
  </Router>

    
  );
}

export default App;