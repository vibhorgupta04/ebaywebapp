import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { category } from '../store';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ModuleCategory = ({ categoriesData }) => {
  const dispatch = useDispatch();
  console.log(useSelector((state) => state?.product?.categorySlug));
  return (
    <div className="my-10 mx-2">
      <div className="py-2 text-xl md:text-2xl font-bold">Shop By Category</div>
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
              onClick={() => dispatch(category(id))}
            >
              <Link to={`/products/categoryId-${id}`}>
              <div className="flex items-center bg-gray-300 rounded-full mx-auto">
                {image && (
                  <img
                    src={image}
                    alt="logo"
                    className="rounded-full w-auto md:w-40 lg:w-60"
                  />
                )}
              </div>
              {name && (
                <div className="text-lg md:text-xl hover:text-2xl hover:font-semibold">
                  {name}
                </div>
              )}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModuleCategory;
