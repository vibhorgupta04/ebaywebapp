import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchCategories, fetchCategoryProduct } from '../api/fetch';
import { Link, useParams } from 'react-router-dom';
import Loading from './common/Loading';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

const ModuleCategoryProducts = () => {
  const [loading, setLoading] = useState(false);
  const [categoryData, setCategoryData] = useState();
  const [categoriesData, setCategoriesData] = useState();

  const { categoryId } = useParams();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchCategoryProduct(categoryId);
      setCategoryData(res.data.products);
      const categories = await fetchCategories();
      setCategoriesData(categories.data);
      setLoading(false);
    })();
  }, [categoryId]);
  return (
    <section>
      <Header />
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <>
        <div className="flex justify-between gap-2 my-6 mx-4">
          <div className="hidden md:block w-fit  py-4 px-2 min-w-[250px]">
            <Disclosure defaultOpen>
              <DisclosureButton className="py-2 text-xl w-full flex justify-between font-semibold">
                Category <span>+</span>
              </DisclosureButton>
              <DisclosurePanel className="text-gray-500">
                <div className="flex flex-col gap-1 pt-4 pl-2 pb-4">
                  <div className="text-blue-500 cursor-pointer">All</div>
                 {categoriesData?.map(cat => <Link to={`/products/categoryId/${cat}`} className="text-blue-500 cursor-pointer capitalize">
                    {cat}
                  </Link>)}
                </div>
              </DisclosurePanel>
              <div className="border-b" />
            </Disclosure>
          </div>
            {categoryData?.length > 0 ? (
            <div className="my-6 mx-4 md:mx-auto w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categoryData?.map((items) => {
                const { images, title, price, id } = items;
                return (
                  <>
                    <Link to={`/products/${id}`} key={`product-${id}`} className='border-b'>
                      <div
                        className="w-full md:w-40 flex flex-col text-left my-2"
                      >
                        {images ? (
                          images
                            ?.slice(0, 1)
                            .map((url) => (
                              <img
                                key={url}
                                src={url}
                                alt={`Product ${id}`}
                                className="h-60 w-fit md:h-32 object-fit"
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
          </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default ModuleCategoryProducts;
