import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchCategoryProduct } from '../api/fetch';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productDetail } from '../store';
import Loading from './common/Loading';

const ModuleCategoryProducts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const { categoryId } = useParams();
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchCategoryProduct(categoryId);
      setCategoryData(res.data);
      setLoading(false);
    })();
  }, [categoryId]);
  return (
    <section>
      <Header />
      <div className='className="max-w-7xl mx-auto"'>
        {loading ? (
          <Loading />
        ) : (
          <>
            {categoryData?.length > 0 ? (
            <div className="my-6 mx-4 md:mx-auto w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categoryData?.map((items) => {
                const { images, title, price, id } = items;
                return (
                  <>
                    <Link to={`/products/${id}`} key={`product-${id}`}>
                      <div
                        className="w-full md:w-40 flex flex-col text-left my-2"
                        // onClick={() => dispatch(productDetail(items))}
                      >
                        {images ? (
                          images
                            ?.slice(0, 1)
                            .map((item, index) => (
                              <img
                                src={item}
                                alt=""
                                className="w-full md:w-40"
                              />
                            ))
                        ) : (
                          <div className="py-40 px-40 bg-gray-300"></div>
                        )}
                        <div className="text-lg">{title}</div>
                        <div className="text-left font-bold">${price}</div>
                      </div>
                    </Link>
                    {/* )} */}
                  </>
                );
              })}
            </div>
            ) : (
              <div className='py-10 text-center text-xl'>No product found in this category</div>
            )}
          </>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default ModuleCategoryProducts;
