import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase/firebase";
const Login = () => {
  const [formData, setFormData] = useState({
    //   firstName: '',
    //   lastName: '',
    email: "",
    password: "",
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
      console.log(userCredential);
      const user = userCredential.user;
      // const userData = {
      //   email: formData.email,
      //   firstName : formData.firstName,
      //   lastName : formData.lastName
      // }
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      console.log(result);
      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="py-8 px-3 flex items-center justify-between  text-base ">
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
        <div className="container mx-auto">
          <div className="w-5/12  rounde-xl mx-auto overflow-hidden text-center">
            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="mt-4">
              Sign in to eBay or{" "}
              <span className="text-custom-blue hover:text-blue-700 underline">
                <Link to="/register">create an account</Link>
              </span>
            </p>
            <form action="#" onSubmit={handleSubmit}>
              <div className="mt-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or username"
                  className="border  border-gray-400 py-1 px-2  rounded-lg bg-gray-100 w-3/4 placeholder-gray-600"
                />
              </div>
              <div className="mt-5 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="border border-gray-400 py-1 px-2  rounded-lg bg-gray-100 w-3/4 placeholder-gray-600"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility inline
                  className="absolute inset-y-0 right-0 px-24 py-2  rounded-md"
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
                  className=" rounded-2xl py-3  font-bold text-lg text-white bg-custom-blue hover:bg-blue-700 w-3/4"
                >
                  Continue
                </button>
              </div>
            </form>
            {/* <div className='mt-5'>
<p>
  or
</p>
    </div> */}
            {/* <div className='mt-5'>

    
    <div className='flex-1 border-t border-gray-300 ml-4 w-2/4 '><span className='m-4 text-gray-500'>or</span></div>
    </div> */}
            <div className="flex flex-row  mx-auto w-3/4 mt-5">
              <div className="border-b-2 mb-2.5  mr-2 w-full"></div>
              <div className="text-sm font-bold w-fit">OR</div>
              <div className="border-b-2 mb-2.5 ml-2 w-full"></div>
            </div>
            <div className="mt-5">
              <button className="flex items-center py-3 pl-3 pr-24 mx-auto justify-between rounded-full border  border-gray-200  font-bold text-lg text-white hover:bg-hv bg-fb w-3/4">
                <span className="text-[25px]">
                  <ImFacebook2 />
                </span>
                <span>Continue with Facebook</span>
              </button>
            </div>
            <div className="mt-5">
              <button
                onClick={handleSignInWithGoogle}
                className="flex items-center py-3 pl-3 pr-24 mx-auto justify-between rounded-full border  border-gray-500  font-bold text-lg text-gray-800 hover:bg-gray-200 bg-white w-3/4"
              >
                <span className="text-[22px]">
                  <FcGoogle />
                </span>
                <span>Continue with Google</span>
              </button>
            </div>
            <div className="mt-5">
              <button className="flex items-center py-3 pl-3 pr-28 mx-auto justify-between rounded-full border  border-gray-500  font-bold text-lg text-gray-800 hover:bg-gray-200 bg-white w-3/4">
                <span className="text-[22px]">
                  <FaApple />
                </span>
                <span>Continue with Apple</span>
              </button>
            </div>
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
                </Link>{" "}
                and
                <Link to="" className="text-gray-500 underline">
                  AdChoice
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
