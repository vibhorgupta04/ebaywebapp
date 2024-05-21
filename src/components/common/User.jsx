import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, app, db } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { IoLogOutOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedIn } from '../../store';

function User() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      // console.log('user', user);
      // if (user) {
      //   dispatch(isLoggedIn(true))
      // }else {
      //   dispatch(isLoggedIn(false))
      // }
      // const docRef = doc(db, 'Users', user?.uid);
      // const docSnap = await getDoc(docRef);
      // if (docSnap.exists()) {
      //   setUserDetails(docSnap.data());
      //   console.log('docsnap', docSnap.data());
      // }

      if (user) {
        dispatch(isLoggedIn(true)); // Set isLoggedIn to true if user is logged in
        const docRef = doc(db, 'Users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        }
      } else {
        dispatch(isLoggedIn(false)); // Set isLoggedIn to false if user is not logged in
        setUserDetails(null); // Clear user details
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const firstName = userDetails?.firstName?.split(' ') ?? '';

  toast.success('Logged in successfully!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

  return (
    <>
      {userDetails ? (
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer bg-white"
          >
            {userDetails?.photo ? (
              <img
                src={userDetails?.photo}
                alt="profile"
                className="w-[40px] h-[40px] rounded-full  border-4 border-white  "
              />
            ) : (
              <div className="uppercase bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center text-white text-lg">
                {userDetails?.firstName.charAt(0)}{userDetails?.lastName.charAt(0)}
              </div>
            )}

            <span className="text-black font-semibold underline">
              {firstName[0]}
            </span>
            <span className="text-[20px]">
              <RiArrowDropDownLine />
            </span>
          </div>
          {open && (
            <div className="rounded border-[1px] border-gray-500 bg-white  absolute top-[40px] w-[200px] shadow-md z-10 ">
              <div className="cursor-pointer hover:text-white pl-2 flex items-center gap-4 hover:bg-blue-500 p-4">
                <FaRegCircleUser className="text-xl" /> Profile
              </div>
              <div
                onClick={handleLogout}
                className="cursor-pointer hover:text-white pl-2 flex items-center gap-4 hover:bg-blue-500 p-4 "
              >
                <IoLogOutOutline className="text-xl" /> Sign out
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-1">
          Hi!
          <Link to="/login" className="underline text-blue-500">
            Sign in
          </Link>{' '}
          <span className="hidden md:block">or </span>
          <Link
            to="/register"
            className="hidden md:block underline text-blue-500"
          >
            register
          </Link>
        </div>
      )}
    </>
  );
}

export default User;
