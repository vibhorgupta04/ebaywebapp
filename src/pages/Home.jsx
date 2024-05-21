import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Footer from '../components/common/Footer';
import { fetchCategories } from '../api/fetch';
import ModuleCategory from '../components/ModuleCategory';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Loading from '../components/common/Loading';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchCategories();
      setCategoriesData(res.data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <section>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="mt-2 mb-6 mx-auto">
          <Swiper
            spaceBetween={30}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            draggable={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className="w-full md:h-[450px]">
                <Link to="/products/categoryId/mens-shoes">
                  <img
                    src="/assets/Banner-Images/1.jpg"
                    className=" object-cover h-64 md:h-[450px] w-full"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:h-[450px]">
                <Link to="/products/categoryId/furniture">
                  <img
                    src="/assets/Banner-Images/3.jpg"
                    className=" object-cover h-64 md:h-[450px] w-full"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:h-[450px]">
                <img
                  src="/assets/Banner-Images/2.jpg"
                  className=" object-cover h-64 md:h-[450px] w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:h-[450px]">
                <Link to="/products/categoryId/lighting">
                  <img
                    src="/assets/Category-images/florian-bernhardt-bnXUaEq9xYQ-unsplash.jpg"
                    className=" object-cover h-64 md:h-[450px] w-full"
                  />
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full md:h-[450px]">
                <Link to="/products/categoryId/skincare">
                  <img
                    src="/assets/Banner-Images/5.jpg"
                    className=" object-cover h-64 md:h-[450px] w-full"
                  />
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <ModuleCategory categoriesData={categoriesData} />
        <div className="flex flex-col md:flex-row bg-gray-100 mb-4 rounded">
          <div className="md:min-w-[400px] flex flex-col py-6 md:py-4 px-4 gap-y-4">
            <h3 className="text-3xl md:text-5xl md:leading-[60px] font-semibold">
              Expand your collection
            </h3>
            <p>
              Discover a wide range of Electronics, Furniture, Shoes, Books!{' '}
            </p>
            <Link
              to="/products"
              className="w-fit px-6 ring-1 ring-black rounded-full py-2 hover:text-white hover:bg-black "
            >
              Shop now
            </Link>
          </div>
          <Link to="/products" className="w-full">
            <img
              src="/assets/Banner-Images/2.jpg"
              className="object-cover max-h-[340px] h-full w-full"
            />
          </Link>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
