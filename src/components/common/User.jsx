import { signOut } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, app, db } from '../../firebase/firebase';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { RiArrowDropDownLine } from 'react-icons/ri';
// import person from '../../assets/user1.jpg';
function User() {
  const [open, setOpen] = useState(false);

  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log('user is not logged in');
      }
    });
  };
  console.log(userDetails);
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

  return (
    <>
      {/* {!localStorage.getItem("token") ? ( */}
      {userDetails ? (
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex gap-1 cursor-pointer bg-white"
          >
            Hi{' '}
            <span className="text-black font-semibold underline">
              {userDetails.firstName}!
            </span>
            <span className="text-[20px]">
              <RiArrowDropDownLine />
            </span>
          </div>

          {open && (
            <div className="rounded border-[1px] border-gray-500 bg-white  absolute top-[25px] w-[100px] shadow-md">
              <div className="p-1">
                <img
                  src={userDetails.photo}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full  border-4 border-white  "
                />
              </div>

              <div className="cursor-pointer hover:text-gray-400 pl-2 ">
                Profile
              </div>

              <div
                onClick={handleLogout}
                className="cursor-pointer hover:text-gray-400 pl-2 "
              >
                Sign out
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
