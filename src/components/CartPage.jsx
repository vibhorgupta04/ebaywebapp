import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
function CartPage() {

    const {cart,totalQuantity,totalPrice} = useSelector((state) => state.allCart)
  return (
    <section className="max-w-7xl mx-auto">
      <Header />
      <div>
        <span className='text-[30px] font-bold'>Shopping Cart</span>
      </div>

<div className="mx-2 my-10">
      <div className=" flex flex-row  gap-6 ">

<div className=" flex w-[900px] px-4 border border-gray-300 ">
  <div className=' w-1/2 mt-4'>
<h1 className="text-gray-500">99.9% positive feedback</h1>
<div className='flex  mt-4'>
<img className=" w-[100px] h-[100px]" src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png" />
<div className="flex flex-col">
<Link className="pl-4 text-[18px] font-semibold underline hover:text-gray-500">Addidas collection</Link>
<span className="pl-4">New with box</span>
</div>
</div>

  </div>
  <div className='w-1/2 mt-4 text-right '>
<span> Request combined shipping</span>
<div className="flex">
  <div className=' w-1/2 mt-4 '>
    <div className="flex flex-col text-right">
    <span>Qty 1</span>
    <span className="text-gray-500 mt-4">eBay shipping to</span>
    <span className="text-gray-500 ">authenticator, then to</span>
    <span className="text-gray-500 ">you</span>
    </div>
  </div>
  <div className=' w-1/2 mt-4 '>
<div className="flex flex-col text-right">
<span className="pl-4 text-[18px] font-semibold ">US $999.00</span>
<span className="text-gray-500">+ US $14.95</span>
</div>
<div className="mt-28 mb-2">
  <Link to="" className="underline hover:text-gray-500 ">Remove</Link>
</div>
  </div>
</div>
  </div>
</div>

<div className="flex flex-col bg-gray-100 w-96 rounded-xl">
<div className="flex items-center justify-between px-3 mt-3">
  <div>Item(1)</div>
  <div>US $999.00</div>
</div>
<div className="flex items-center justify-between px-3 mt-2">
  <div>Shipping</div>
  <div>US $14.95</div>
</div>
<div className="border-b px-3 border-gray-300 mt-4"></div>
<div className="flex items-center justify-between px-3 mt-4">
<div className=" text-[18px] font-semibold">Subtotal</div>
  <div className=" text-[18px] font-semibold">US $1,013.95</div>
</div>
<div className="mt-3 px-4 ">
<button className="bg-custom-blue hover:bg-blue-700 rounded-full w-full py-3  text-[18px] font-semibold">Go to Checkout</button>
</div>

</div>

        </div>
        </div>
      <Footer />  
    </section>
  )
}

export default CartPage
