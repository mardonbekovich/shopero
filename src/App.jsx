import React from 'react';
import './App.scss';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Header from './components/Header/Header';
import Email from './components/Email/Email';
import Products from './pages/Product/Product';

const App = () => {
  return (
    <>
     <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path='/product/:id' element={<Products/>}/>
      </Routes>
      <Email/>
    </>
  );
};

export default App;
