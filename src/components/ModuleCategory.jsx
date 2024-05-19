import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ModuleCategory = ({ categoriesData }) => {
  return (
    <>
      {categoriesData && (
        <div className="my-20 mx-2">
          <div className="text-3xl md:text-5xl md:leading-[60px] pb-10  font-bold">
            Shop By Category
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            draggable={true}
            navigation={false}
          >
            {categoriesData?.map(({ image, name, id }) => (
              <SwiperSlide key={id && `category-${id}`}>
                <div
                  className="w-full md:w-fit flex flex-col justify-center items-center cursor-pointer"
                >
                  <Link
                    to={`/products/categoryId/${id}`}
                    className="flex flex-col items-center"
                  >
                    <div className="flex items-center bg-gray-300 rounded-full mx-auto">
                      {image ? (
                        <img
                          src={image}
                          alt="logo"
                          className="rounded-full w-auto md:w-40 md:h-40 lg:w-60 lg:h-60"
                        />
                      ) : (
                        <div className="bg-gray-600 lg:py-60 lg:h-60"></div>
                      )}
                    </div>
                    {name && (
                      <div className="text-lg md:text-xl hover:text-2xl h-10 hover:font-semibold">
                        {name}
                      </div>
                    )}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ModuleCategory;
