import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ModuleProducts from './components/ModuleProducts';
import ModuleCategoryProducts from './components/ModuleCategoryProduct';
import ModuleProductsDetail from './components/ModuleProductDetail';

const App = (props) => {
  const categoryId= useSelector((state) => state?.product?.categorySlug)
  const productId= 4
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ModuleProducts />} />
        <Route path={`/products/categoryId/:categoryId`} element={<ModuleCategoryProducts />} />
        <Route path={`/products/:productId`} element={<ModuleProductsDetail />} />
      </Routes>
    </>
  );
};

export default App;
