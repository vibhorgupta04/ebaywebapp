import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../../store';
import User from './User';
import { Link, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const search = useSelector((state) => state.product.title);

  const handleSearch = () => {
    navigate(`/search?title=${search}`);
  };

  return (
    <div className="mx-auto  bg-white">
      <div className="w-full">
        {/* First */}
        <div className="border-b">
          <div className="max-w-7xl mx-auto py-2 md:py-2 px-3 flex items-center justify-between text-sm border-b">
            <div className="flex gap-2 md:gap-4">
              <User />
              <div className="hidden md:block">Daily Deals</div>
              <div className="hidden md:block">Help & Contact</div>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div>My ebay</div>
              <IoCartOutline className="text-2xl" />
            </div>
          </div>
        </div>
        {/* Second */}
        <div className='border-b'>
          <div className="max-w-7xl mx-auto py-3 md:py-4 px-3 flex items-center justify-between gap-4 text-base ">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"
                alt="logo"
                className="w-20 md:w-32"
              />
            </Link>
            <div className="w-full flex gap-2 items-center">
              <div className="hidden md:blockleading-4">
                <select className="">
                  <option> Shop By Category</option>
                </select>
                {/* Shop By Category */}
              </div>
              <div className="w-full flex gap-2">
                <div className="w-full flex items-center border border-black">
                  <IoIosSearch className="ml-2 text-2xl text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for anything"
                    className="w-full  focus:outline-none py-1 px-2"
                    onChange={(e) => dispatch(searchItem(e.target.value))}
                  />
                </div>
                <button
                  className="text-white bg-blue-600 px-4 md:px-10 py-1"
                  disabled={search.length === 0}
                  onClick={handleSearch}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
