import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import { useSelector } from 'react-redux';
import ModuleProductPage from './ModuleProductPage';

const ModuleProductDetail = () => {
  const { productId } = useParams();
  // console.log(product);
  return (
    <section className="max-w-7xl mx-auto">
      <Header />
      <ModuleProductPage  />
      <Footer />  
    </section>
  );
};

export default ModuleProductDetail;
