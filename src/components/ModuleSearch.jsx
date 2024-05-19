import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { Link, useLocation } from 'react-router-dom';
import { fetchProductByTitle } from '../api/fetch';
import { parseImageUrl } from './ModuleProducts';
import Loading from './common/Loading';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ModuleSearch = () => {
  const query = useQuery();
  const title = query.get('title');
  const [loading, setLoading] = useState();
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchProductByTitle(title);
      setSearchData(res.data.products);
      setLoading(false);
    })();
  }, [title]);

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto">
        {!loading ? (
          <div>
            <h1 className="px-4 py-4">
              <b>{searchData?.length}</b> results for <b>{title}</b>
            </h1>
            {searchData?.length > 0 ? (
              <div className="my-6 mx-4 md:mx-auto w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {searchData ? (
                  <>
                    {searchData?.map(({ images, title, price, id }) => (
                      <>
                        <Link to={`/products/${id}`}>
                          <div
                            key={`product-${id}`}
                            className="w-40 flex flex-col text-left my-2"
                          >
                            {images ? (
                              images
                                .slice(0, 1)
                                .map((url) => (
                                  <img
                                    key={url}
                                    src={url}
                                    alt={`Product ${id}`}
                                    className="h-32"
                                  />
                                ))
                            ) : (
                              <div className="py-40 px-40 bg-gray-300"></div>
                            )}
                            <div className="text-lg">{title}</div>
                            <div className="text-left font-bold">${price}</div>
                          </div>
                        </Link>
                      </>
                    ))}{' '}
                  </>
                ) : (
                  <> </>
                )}
              </div>
            ) : (
              <div className="px-2 py-10 flex justify-center items-center flex-col gap-4">
                <img
                  src="/assets/images/error-no-search-results_2353c5.png"
                  alt=""
                  className="w-full max-w-[400px]"
                />
                <p className="text-xl font-bold text-center">
                  Sorry, no results found!
                </p>
                <p className="text-gray-400 text-xl text-center">
                  Please check the spelling or try searching for something else
                </p>
              </div>
            )}
          </div>
        ) : (
          <Loading />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ModuleSearch;
