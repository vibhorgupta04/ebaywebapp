import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import { fetchProducts } from '../api/fetch';
import Loading from './common/Loading';
import { Link } from 'react-router-dom';

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
    <section>
      <Header />
      <div className='max-w-7xl mx-auto'>
        {loading ? (
          <Loading />
        ) : (
          <div className="my-6 mx-4 md:mx-auto w-fit grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {productsData?.map(({ images, title, price, id }) => (
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
                            src={parseImageUrl(url)}
                            alt={`Product ${id}`}
                            className="w-40 h-32"
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
            ))}
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Products;

export const parseImageUrl = (url) => {
  let splittedUrl = url.split('https')[1]
  splittedUrl = 'https' + splittedUrl.split('\"')[0]
  const extensions = ['.jpeg', '.svg', '.png'];
  if(extensions.some(extension => splittedUrl.endsWith(extension))) return splittedUrl
  return '/assets/images/No-Image-Placeholder.svg.png'
}