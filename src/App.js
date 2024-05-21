import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import Detailproduct from './components/DetailProduct/Detailproduct';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route exact path='/shop' element={<Shop/>} />
          
          <Route exact path='/review' element={<Review/>} />
          <Route exact path='/inventory' element={<Inventory/>} />
          <Route exact path='/' element={<Shop/>} />
          {/* dynamic path adding */}
          <Route exact path='/product/:productKey' element={<Detailproduct/>} /> 

          <Route exact path='*' element={<NotFound/>} />




        </Routes>
      </Router>
      

      
      

    </div>
  );
}

export default App;
