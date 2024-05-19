import React, { useState } from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import moment from 'moment';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import Loading from './common/Loading';

const ModuleCart = () => {
  const currentDate = moment();
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const [quantity, setQuantity] = useState(
    Array(cartItems?.length ?? 1).fill(1)
  );

  const updateQuantity = (index, newValue) => {
    const newQuantity = [...quantity];
    newQuantity[index] = +newValue;

    setQuantity(newQuantity);
  };

  const initialValue = 0;
  const totalQuantity = quantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  const calculateTotalPrice = () => {
    let price = 0;
    for (let i = 0; i < cartItems.length; i++) {
      price += cartItems[i].price * quantity[i];
    }
    return price;
  };

  const totalPrice = calculateTotalPrice();

  if (!cartItems) return <Loading />;

  return (
    <div>
      <Header />
      <div className="mx-auto max-w-7xl px-2 my-10">
        <div className="w-full flex flex-col md:flex-row gap-4">
          {/* Shipping */}
          <div className="w-full p-4 ring-1 ring-gray-200 ">
            <p className="font-semibold text-xl">Review item and shipping</p>
            {cartItems?.map(({ images, price, title }, index) => (
              <>
                <div className="py-6 flex flex-col md:flex-row gap-10">
                  {images && (
                    <img src={images?.[0]} alt={title} className="w-28 h-28" />
                  )}
                  <div className="flex flex-col gap-4">
                    {title && <p className="text-lg font-semibold">{title}</p>}
                    {price && (
                      <p className="text-xl font-bold">
                        US ${price * quantity[index]}.00
                      </p>
                    )}
                    <div className="flex flex-col gap-2">
                      <label>Quantity</label>
                      <select
                        className="py-4 px-2 w-40 rounded-lg ring-1 ring-gray-300 focus:outline-none bg-gray-100"
                        value={quantity[index]}
                        onChange={(e) => updateQuantity(index, e.target.value)}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <p className="text-gray-600 font-semibold text-xl">
                      Free returns
                    </p>

                    <div className="text-xl text-semibold">
                      <p className="font-bold">Delivery</p>
                      <p className="text-green-600 font-bold">
                        Free Standard Shipping
                      </p>
                      <p>
                        Est. delivery:{' '}
                        {moment(currentDate).add(7, 'days').format('MMMM Do')} –{' '}
                        {moment(currentDate).add(10, 'days').format('MMMM Do')}
                      </p>
                    </div>
                  </div>
                </div>
                <div className='border-b pt-4'></div>
              </>
            ))}
          </div>
          {/* Payment */}
          <div className="h-fit sticky top-2 ring-1 ring-gray-200 md:w-[450px] p-4">
            <div className="text-base flex flex-col gap-3">
              <div className="w-full flex justify-between text-xl">
                <p>Item ({totalQuantity})</p>
                <p>US ${totalPrice.toFixed(2)}</p>
              </div>
              <div className="w-full flex justify-between text-xl">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <div className="w-full flex justify-between text-xl">
                <p>Discount</p>
                <p>-US $0.00</p>
              </div>
              <div className="w-full flex justify-between text-xl">
                <p>Tax</p>
                <p>US $4.80</p>
              </div>
            </div>
            <div className="border-b pt-6" />
            <div className="w-full flex justify-between text-2xl font-bold py-3">
              <p>Order total</p>
              <p>US ${(totalPrice + 4.8).toFixed(2)}</p>
            </div>
            <p className="bg-gray-100 px-3 py-2 mt-6 text-sm">
              The state of Alabama requires eBay to collect sales tax and
              applicable fees from buyers. eBay will pay the collected tax to
              the tax authority.{' '}
            </p>
            <div>
              <button
                className="w-full bg-blue-600 font-semibold text-white text-lg rounded-full py-4 mt-6"
                disabled
              >
                Confirm and pay
              </button>
            </div>
            <div>
              <div className="flex items-start gap-4 mt-6">
                <RiMoneyDollarCircleFill className="text-4xl text-blue-600" />
                <p className="text-black font-semibold">
                  Purchase protected by{' '}
                  <b className="text-black cursor-pointer font-medium underline">
                    eBay Money Back Guarantee.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModuleCart;
