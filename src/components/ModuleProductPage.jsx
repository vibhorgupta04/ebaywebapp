import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RiArrowGoBackLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { BsLightningCharge } from 'react-icons/bs';
import {
  SiPaytm,
  SiPaypal,
  SiSamsungpay,
  SiVisa,
  SiMastercard,
  SiGooglepay,
} from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api/fetch';
import Loading from './common/Loading';
import moment from 'moment';

const ModuleProductPage = () => {
  const { productId } = useParams();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetchProductById(productId);
      setProductData(res.data);
      setLoading(false);
    })();
  }, [productId]);

  const { description, images, price, title, updatedAt } = productData;

  console.log(updatedAt);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto">
      {productData && (
        <div className="mx-2 my-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="max-w-[800px]">
              <Swiper
                spaceBetween={30}
                style={{
                  '--swiper-navigation-color': '#25636B',
                  '--swiper-pagination-color': '#25636B',
                }}
                pagination={{ clickable: true }}
                draggable={true}
                navigation={true}
                modules={[Navigation, Pagination]}
              >
                {images &&
                  images?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        className="w-full lg:w-[800px] lg:h-[800px]"
                        src={item}
                        alt="product"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <div className="flex flex-col mx-6">
              {title && (
                <span className="text-3xl font-bold border-b-2 h-fit pb-4">
                  {title}
                </span>
              )}
              <div className="border-b-2 h-fit py-4">
                <span className="text-3xl font-bold ">US ${price}.00</span>
                <br />
                <p className="text-sm font-medium text-gray-500">
                  or Best Offer
                </p>
                <p className="pt-4">
                  US ${Math.floor(Math.random() * 10).toFixed(2)} eBay
                  International Shipping
                </p>
              </div>
              <div className="py-4 flex flex-col gap-4">
                <span className="flex">
                  Condition: <p className="pl-1 font-semibold">New with box</p>
                </span>
                <span className="pt-2 flex flex-col gap-4">
                  <button className="w-full bg-blue-600 font-semibold text-white text-lg rounded-full py-3">
                    Buy it Now
                  </button>
                  <button className="w-full ring-1 ring-blue-600 font-semibold text-blue-600 text-lg rounded-full py-3">
                    View in Cart
                  </button>
                  <button className="w-full ring-1 ring-blue-600 font-semibold text-blue-600 text-lg rounded-full py-3">
                    Make Offer
                  </button>
                </span>
                <span className="mt-2 px-4 py-4 bg-gray-100 rounded-lg">
                  <span className="p-2 flex items-center gap-2">
                    <span className="bg-white p-2 rounded-full">
                      <RiArrowGoBackLine className="bg-white rounded-full text-xl" />
                    </span>
                    <p>
                      <b className="font-semibold">Breathe easy.</b> Returns
                      accepted
                    </p>
                  </span>
                  <span className="p-2 flex items-center gap-2">
                    <span className="bg-white p-2 rounded-full">
                      <BsLightningCharge className="bg-white rounded-full text-xl" />
                    </span>
                    <p>
                      <b>People want this.</b> {Math.floor(Math.random() * 100)}{' '}
                      people are watching this.
                    </p>
                  </span>
                </span>
                <span className="flex flex-col gap-4 border-b-2 h-fit pb-4">
                  <div className="flex gap-3 h-fit">
                    <p className="w-20">Returns:</p>
                    <p>30 days returns. Buyer pays for return shipping</p>
                  </div>
                  <div className="flex items-center gap-x-4 h-fit">
                    <p className="pt-1 w-20">Payments:</p>
                    <div className=" flex flex-wrap items-center gap-4 ">
                      <SiPaytm className="text-4xl text-blue-900" />
                      <SiPaypal className="text-2xl text-blue-800" />
                      <SiSamsungpay className="text-4xl" />
                      <SiVisa className="text-4xl text-blue-600" />
                      <SiMastercard className="text-4xl" />
                      <SiGooglepay className="text-4xl text-gray-600" />
                    </div>
                  </div>
                </span>
                <div className="flex flex-col gap-4 border-b-2 h-fit pb-4">
                  <p className="text-xl font-semibold">Shop with confidence</p>
                  <div className="flex items-center gap-4">
                    <RiMoneyDollarCircleFill className="text-4xl text-blue-600" />
                    <p className="text-black font-semibold">
                      eBay Money Back Guarantee. <br />
                      <p className="text-gray-600">
                        Get the item you ordered or your money back.{' '}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 ring-1 ring-gray-200 px-4 py-10 rounded flex flex-col gap-4 ">
            <h3 className="text-3xl font-semibold.e">About this item</h3>
            <div className="text-sm">
              Seller assumes all responsibility for this listing.
            </div>
            <div className="text-gray-400">
              Last updated on {moment(updatedAt).format('MMM DD, YYYY HH:mm:ss')}
            </div>
            <div>
              <h3 className="text-3xl">Item description from the seller</h3>
              <p className="pt-4 text-lg">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModuleProductPage;
