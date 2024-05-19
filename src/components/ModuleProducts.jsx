import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchCategories, fetchProducts } from '../api/fetch';
import Loading from './common/Loading';
import { Link } from 'react-router-dom';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState();
  const [sortType, setSortType] = useState("")
  const [categoriesData, setCategoriesData] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchProducts();
      setProductsData(res.data.products);

      const categories = await fetchCategories();
      setCategoriesData(categories.data);
      setLoading(false);
    })();
  }, []);
  if (!productsData) return <Loading />
  const getSortedProducts = () => {
    const itemsWithIndex = productsData.map((item, index) => ({ ...item, originalIndex: index }));

    if(sortType === 'low') return itemsWithIndex?.sort((a, b) => a.price - b.price)
    if(sortType === 'high') return itemsWithIndex?.sort((a, b) => b.price - a.price);

    return itemsWithIndex.sort((a, b) => a.originalIndex - b.originalIndex);
  }

  const products = getSortedProducts()

  return (
    <section>
      <Header />
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className="flex justify-end mr-4">
              <select className="my-4 bg-gray-100 rounded px-4 py-2 focus:outline-none" value={sortType} onChange={(e) => setSortType(e.target.value)}>
                <option value="popular">Popularity</option>
                <option value="low">Price--Low to High</option>
                <option value="high">Price--High to Low</option>
              </select>
            </div>
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
              <div className="md:mx-auto w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map(({ images, title, price, id }) => (
                  <div>
                    <Link to={`/products/${id}`} className='border-b'>
                      <div
                        key={`product-${id}`}
                        className="md:w-40 flex flex-col text-left my-2"
                      >
                        {images ? (
                          images
                            .slice(0, 1)
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
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Products;
