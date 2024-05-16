import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchProducts } from '../api/fetch';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchProducts();
      setProductsData(res.data);
      setLoading(false);
    })();
  }, []);
  return (
    <section className="max-w-7xl mx-auto">
      <Header />
      {/* <div className='w-full'> */}
      <div className="my-6 mx-4 w-fit flex flex-wrap gap-6">
        {productsData?.map(({ images, description, title, price, id }) => (
          <div
            key={`product-${id}`}
            className="w-40 flex flex-col text-left my-2"
            // onClick={() => }
          >
            {images ? (
              images
                ?.slice(0,1)
                .map((item, index) => (
                  <img src={item} alt="" className="w-40" />
                ))
            ) : (
              <div className='py-40 px-40 bg-gray-300'></div>
            )}
            <div className="text-lg">{title}</div>
            <div className="text-left font-bold">${price}</div>
          </div>
        ))}
      </div>
      {/* </div> */}
      <Footer />
    </section>
  );
};

export default Products;
