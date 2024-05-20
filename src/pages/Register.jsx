import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { setDoc, doc } from 'firebase/firestore';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/common/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const isFilled = Object.values(formData).every((field) => field !== '');
    setIsFormFilled(isFilled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    toast.success('Register successfully');
    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // const user = userCredential.user;
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, 'Users', user?.uid), {
          email: user.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          photo: '',
        });
      }
      console.log('user register successfully');
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.username = 'FirstName is required!';
    }
    if (!values.lastName) {
      errors.username = 'LastName is required!';
    }
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
    <section>
      <div className="max-w-7xl mx-auto my-4 px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"
              alt="logo"
              className="w-32 md:w-32 mx-auto"
            />
          </Link>
          <div>
            <span className="flex gap-1 text-base px-4 text-gray-500">
              <span className='hidden md:block'>Already have an account? </span>
              <Link className="underline text-black" to="/Login">
                Sign in
              </Link>
            </span>
          </div>
        </div>

        <div className="mx-2 my-10">
          <div className="w-full md:w-96 flex justify-center mx-auto">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold">Create an account</h2>
              <form
                action="#"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    required
                    className="border border-gray-400 py-3 px-2 rounded-lg bg-gray-100 placeholder-gray-600 focus:outline-none"
                  />
                  <span className="text-red-600 text-sm">
                    {formErrors.firstName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    required
                    className="border border-gray-400 py-3 px-2 rounded-lg bg-gray-100 placeholder-gray-600 focus:outline-none"
                  />
                  <span className="text-red-600 text-sm">
                    {formErrors.lastName}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    required
                    className="border border-gray-400 py-3 px-2 rounded-lg bg-gray-100 placeholder-gray-600 focus:outline-none"
                  />
                  <p className="text-red-600 text-sm">{formErrors.email}</p>
                </div>
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      required
                      className="w-full border border-gray-400 bg-gray-100 rounded-lg py-3 px-2 placeholder-gray-600 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)} // Toggle password visibility inline
                      className="absolute top-3 right-2 py-2 rounded-md"
                    >
                      {showPassword ? (
                        <MdOutlineVisibilityOff />
                      ) : (
                        <MdOutlineVisibility />
                      )}
                    </button>
                  </div>
                  <p className="text-red-600 text-sm">{formErrors.password}</p>
                </div>
                <div>
                  <p className="text-[12px] text-black">
                    By selecting <b> Create personal account</b>, you agree to
                    our <b className="underline">User Agreement</b> and
                    acknowledge reading our{' '}
                    <b className="underline">User Privacy Notice.</b>
                  </p>
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className={`w-full rounded-full py-3 font-bold text-lg text-white ${
                      isFormFilled
                        ? 'bg-blue-600 hover:bg-blue-700'
                        : 'bg-gray-300'
                    }`}
                    disabled={!isFormFilled}
                  >
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer theme="dark" />
      </div>
      <Footer />
    </section>
  );
};

export default Register;
