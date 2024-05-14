import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchCategoryProduct } from '../api/fetch';
import { useSelector } from 'react-redux';

const ModuleCategoryProducts = () => {
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState();
  console.log('--->', categoryData);
  const categoryId = useSelector((state) => state?.product?.categorySlug);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchCategoryProduct(categoryId);
      setCategoryData(res.data);
      setLoading(false);
    })();
  }, [categoryId]);
  return (
    <section className="max-w-7xl mx-auto">
      <Header />
      <div className="my-6 mx-4 w-fit flex flex-wrap gap-6">
        {categoryData?.map(
          ({ images, description, title, price, id, category }) => (
            <>
              {category?.id === categoryId && (
                <div
                  key={`product-${id}`}
                  className="w-40 flex flex-col text-left my-2"
                  // onClick={() => }
                >
                  {images ? (
                    images
                      ?.slice(0, 1)
                      .map((item, index) => (
                        <img src={item} alt="" className="w-40" />
                      ))
                  ) : (
                    <div className="py-40 px-40 bg-gray-300"></div>
                  )}
                  <div className="text-lg">{title}</div>
                  <div className="text-left font-bold">${price}</div>
                </div>
              )}
            </>
          )
        )}
        Testing
      </div>
      <Footer />
    </section>
  );
};

export default ModuleCategoryProducts;
