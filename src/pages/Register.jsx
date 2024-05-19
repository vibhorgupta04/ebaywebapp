import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState ,  useEffect } from "react";
import { MdOutlineVisibility } from "react-icons/md";
import { MdOutlineVisibilityOff } from "react-icons/md";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth , db } from "../firebase/firebase";
import { setDoc,doc } from "firebase/firestore";
import {ToastContainer} from "react-toastify";
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [isFormFilled, setIsFormFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const isFilled = Object.values(formData).every((field) => field !== "");
    setIsFormFilled(isFilled);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
    toast.success("Register successfully")
    try {
      // const userCredential = await createUserWithEmailAndPassword(
      //   auth,
      //   formData.email,
      //   formData.password
      // );
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // const user = userCredential.user;
const user = auth.currentUser;  
console.log(user);
if(user){
  await setDoc(doc(db, "Users", user.uid),{
    email: user.email,
    firstName: formData.firstName,
    lastName: formData.lastName
  });
  
}
console.log("user register successfully")    
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formData);
    }
  }, [formErrors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.username = "firstName is required!";
    }
    if (!values.lastName) {
      errors.username = "lastName is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div className="py-3 md:py-4 px-3 flex items-center justify-between  text-base ">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/300px-EBay_logo.svg.png"
            alt="logo"
            className="w-20 md:w-32"
          />
        </Link>

        <div>
          <div>
            <span className="text-[17px] px-4 text-gray-500">
              Already have an account?{" "}
              <Link className="underline text-black" to="/Login">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex w-full   mx-auto overflow-hidden">
          <div className="w-1/2">
            <img
              src="https://ir.ebaystatic.com/cr/v/c01/buyer_dweb_individual.jpg"
              alt="logo"
              className="rounded-2xl"
            />
          </div>
          <div className="w-1/2 py-11 px-32 ">
            <h2 className="text-4xl font-bold">Create an account</h2>

            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formData, undefined, 2)}</pre>
      )} */}

            <form action="#" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5 mt-5">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  required
                  className="border border-gray-400 py-1 px-2 rounded-lg bg-gray-100"
                />
                <span className="text-red-600">{formErrors.firstName}</span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  required
                  className="border border-gray-400 py-1 px-2 rounded-lg bg-gray-100"
                />
                <span className="text-red-600">{formErrors.lastName}</span>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                  className="border  border-gray-400 py-1 px-2 w-full rounded-lg bg-gray-100"
                />
              </div>
              <p className="text-red-600">{formErrors.email}</p>
              <div className="mt-5 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  required
                  className="border border-gray-400 py-1 px-2 w-full rounded-lg bg-gray-100"
                />
<p className="text-red-600">{formErrors.password}</p>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Toggle password visibility inline
                  className="absolute inset-y-0 right-0 px-3 py-2  rounded-md"
                >
                  {showPassword ? (
                    <MdOutlineVisibilityOff />
                  ) : (
                    <MdOutlineVisibility />
                  )}
                </button>
              </div>
              <div className="mt-5">
                <p className="text-[12px] text-gray-400">
                  By selecting{" "}
                  <span className="font-semibold">Create personal account</span>
                  , you agree to our
                  <span className="underline"> User Agreement</span> and
                  acknowledge reading our{" "}
                  <span className="underline">User Privacy Notice</span>.
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className={`w-full rounded-full py-3  font-bold text-lg text-white ${
                    isFormFilled
                      ? "bg-custom-blue hover:bg-blue-700"
                      : "bg-gray-300"
                  }`}
                  style={{ cursor: isFormFilled ? "pointer" : "not-allowed" }}
                  disabled={!isFormFilled}
                >
                  Create personal account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
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
      <ToastContainer theme="dark"/>
      </section>
  );
};

export default Register;
