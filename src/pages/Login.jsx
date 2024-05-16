import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '../firebase/firebase';
const Login = () => {
  const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName: '',
    email: '',
    password: '',
  });
  // const [isFormFilled, setIsFormFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    //   const isFilled = Object.values(formData).every((field) => field !== '');
    //   setIsFormFilled(isFilled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      // const userData = {
      //   email: formData.email,
      //   firstName : formData.firstName,
      //   lastName : formData.lastName
      // }
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-8 px-3 flex items-center justify-between text-base ">
        <div>
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"
              alt="logo"
              className="w-20 md:w-32"
            />
          </Link>
        </div>
      </div>
      <div className="py-18">
        <div className="w-full md:max-w-[400px] mx-auto">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="mt-4">
              Sign in to eBay or{' '}
              <span className="text-custom-blue underline">
                <Link to="/register">create an account</Link>
              </span>
            </p>
          </div>
          <div className="my-6 flex justify-center">
            <form action="#" onSubmit={handleSubmit}>
              <div className="w-full flex items-center">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or username"
                  className="w-full md:w-[350px] border border-gray-400 py-2 px-2 rounded-lg bg-gray-100 placeholder-gray-900"
                />
              </div>
              <div className="mt-5 relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full md:w-[350px] border border-gray-400 bg-gray-100 rounded-lg py-2 px-2 placeholder-gray-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility inline
                  className=" absolute right-2 py-2 rounded-md"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </button>
              </div>

              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full md:w-[350px] rounded-3xl py-3 font-bold text-lg text-white bg-custom-blue hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-2">
            <div className="border-b-2 mb-2.5 w-full" />
            <div className="text-sm font-bold w-fit">OR</div>
            <div className="border-b-2 mb-2.5 w-full" />
          </div>
          <button
            onClick={handleSignInWithGoogle}
            className="my-4 mx-auto md:w-[350px] flex gap-4 items-center pl-4 py-2 rounded-full border border-gray-500 font-bold text-lg text-gray-800 hover:bg-gray-200 bg-white"
          >
            <FcGoogle />
            <p>Continue with Google</p>
          </button>
        </div>

        <div className="border-b-2 my-8 "></div>
        <div className=" py-4 text-white text-center">
          <div className="container mx-auto">
            <p className="text-gray-800 text-[12px]">
              Copyright © 1995-2024 eBay Inc. All Rights Reserved.
              <Link to="" className="text-gray-500 underline">
                Accessibility
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                User Agreement
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                Privacy
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                Payments Terms of Use
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                Cookies
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                CA Privacy Notice
              </Link>
              ,
              <Link to="" className="text-gray-500 underline">
                Your Privacy Choices
              </Link>{' '}
              and
              <Link to="" className="text-gray-500 underline">
                AdChoice
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Login;
