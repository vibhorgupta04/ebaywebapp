import React from 'react';
import Header from '../components/common/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Footer from '../components/common/Footer';

const Home = () => {

  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
{/* <h2>{user && user.email}</h2> */}
  return (
    <>
    
      <Header />
      <div className="max-w-4xl mx-auto">
        <Swiper
          spaceBetween={30}
          pagination={{ clickable: true }}
          draggable={true}
          navigation={true}
          modules={[Pagination]}
        >
          <SwiperSlide>text1</SwiperSlide>
          <SwiperSlide>text2</SwiperSlide>
          <SwiperSlide>text3</SwiperSlide>
          <SwiperSlide>text4</SwiperSlide>
          <SwiperSlide>text5</SwiperSlide>
        </Swiper>
      </div>
      <div className="my-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          draggable={true}
          navigation={false}
        >
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                100% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                100% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                200% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                300% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                100% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                100% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='py-20 w-full flex flex-col justify-center items-center'>
              <div className="flex items-center bg-gray-300 w-40 h-40 rounded-full mx-auto">
                100% Refurbished
              </div>
              <div className="">Refurbished</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <Footer />
    </>
  );
};

export default Home;
