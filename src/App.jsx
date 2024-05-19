import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ModuleProducts from './components/ModuleProducts';
import ModuleCategoryProducts from './components/ModuleCategoryProduct';
import ModuleProductsDetail from './components/ModuleProductDetail';
import ModuleSearch from './components/ModuleSearch';
import ModulePageNotFound from "./components/ModulePageNotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ModuleProducts />} />
        <Route path="/products/categoryId/:categoryId" element={<ModuleCategoryProducts />} />
        <Route path="/products/:productId" element={<ModuleProductsDetail />} />
        <Route path="/search" element={<ModuleSearch />} />
        <Route path="*" element={<ModulePageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
