import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider, db } from '../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import Footer from '../components/common/Footer';
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
      // console.log(user);
    } catch (error) {
      // console.log('error', error);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      // console.log("-->",result);

      localStorage.setItem('token', result.user.accessToken);
      localStorage.setItem('user', JSON.stringify(result.user));
      if (result.user) {
        await setDoc(doc(db, 'Users', result.user?.uid), {
          email: result.user.email,
          firstName: result.user.displayName,
          photo: result.user.photoURL,
          lastName: '',
        });
      }
      // toast.success('Logged in successfully!', {
      //   position: 'top-right',
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'colored',
      // });
      navigate('/');
    } catch (error) {
      console.log(error.status);
      toast.error('Logged in successfully!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password cannot exceed more than 10 characters';
    }
    return errors;
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto my-4 px-4">
        <Link to="/" className="pt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"
            alt="logo"
            className="w-32 md:w-32 mx-auto md:mx-0"
          />
        </Link>
        <div className="py-10">
          <div className="md:text-center">
            <h2 className="text-4xl font-bold">Hello</h2>
            <p className="mt-4">
              Sign in to eBay or{' '}
              <span className="text-custom-blue underline">
                <Link to="/register">create an account</Link>
              </span>
            </p>
          </div>
          <div className="my-6 flex justify-center">
            <form
              action="#"
              onSubmit={handleSubmit}
              className="w-96 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email or username"
                  className="border border-gray-400 py-3 px-2 rounded-lg bg-gray-100 placeholder-gray-600 focus:outline-none"
                />
                <p className="text-red-600">{formErrors?.email}</p>
              </div>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full border border-gray-400 bg-gray-100 rounded-lg py-2 px-2 placeholder-gray-600"
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
                <p className="text-red-600">{formErrors.password}</p>
              </div>
              <button
                type="submit"
                className="mt-4 rounded-3xl py-3 font-bold text-lg text-white bg-custom-blue hover:bg-blue-700"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="w-96 mx-auto flex gap-2">
            <div className="border-b-2 mb-2.5 w-full" />
            <div className="text-sm font-bold w-fit">OR</div>
            <div className="border-b-2 mb-2.5 w-full" />
          </div>
          <div className="md:w-96 mx-auto my-6">
            <button
              onClick={handleSignInWithGoogle}
              className="w-full rounded-full border border-gray-500 font-bold text-lg text-gray-800 hover:bg-gray-200 bg-white"
            >
              <span className="flex justify-center items-center gap-4 py-3 -pl-10">
                <FcGoogle />
                <p>Continue with Google</p>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
