import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../../store';
import User from './User';
import { Link, useNavigate } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = JSON.parse(localStorage.getItem('cart')) ?? [];

  const totalItemInCart = cartItems.length;

  const search = useSelector((state) => state.product.title);
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?title=${search}`);
  };

  return (
    <header className="mx-auto  bg-white">
      <div className="w-full">
        {/* First */}
        <div className="border-b">
          <div className="max-w-7xl mx-auto py-2 md:py-2 px-3 flex items-center justify-between text-sm border-b">
            <div className="flex items-center gap-2 md:gap-4">
              <User />
              <Link to="/products" className="hidden md:block">
                Daily Deals
              </Link>
              <div className="hidden md:block">Help & Contact</div>
            </div>
            <Link
              to={isLoggedIn ? "/cart" : "/login"}
              className="relative flex gap-4 justify-center items-center pr-6"
            >
              <IoCartOutline className="text-2xl" />
              {totalItemInCart > 0 && (
                <span className="absolute -top-2 right-4  bg-blue-600 font-bold text-white flex items-center justify-center rounded-full w-5 h-5">
                  {totalItemInCart}
                </span>
              )}
            </Link>
          </div>
        </div>
        {/* Second */}
        <div className="border-b">
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
              <>
                <form onSubmit={handleSearch} className="w-full flex gap-2">
                  <div className="w-full flex items-center border border-black rounded">
                    <IoIosSearch className="ml-2 text-2xl text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for anything"
                      className="w-full focus:outline-none py-3 px-2"
                      onChange={(e) => dispatch(searchItem(e.target.value))}
                    />
                  </div>
                  <button
                    className="text-white bg-blue-600 px-4 md:px-10 py-1 rounded"
                    disabled={!search}
                    type="submit"
                    // onClick={handleSearch}
                  >
                    Search
                  </button>
                </form>
              </>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
