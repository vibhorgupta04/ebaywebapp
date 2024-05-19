import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth ,app,db} from "../../firebase/firebase";
import { useState , useEffect } from "react";
import {doc,getDoc} from "firebase/firestore"

function User() {
 
const [userDetails, setUserDetails] = useState(null);
const fetchUserData = async () => {
  auth.onAuthStateChanged(async (user) => {
    console.log(user);
    const docRef = doc(db, "Users",user.uid);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      setUserDetails(docSnap.data());
      console.log(docSnap.data());
    }else{
      console.log("user is not logged in");
    }
  });
};
console.log(userDetails)
useEffect(()=>{
  fetchUserData()
},[])

  const navigate = useNavigate();

 

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    navigate("/login");
  };

  return (
    <>
      {/* {!localStorage.getItem("token") ? ( */}
      {userDetails ? (
        <div className="flex gap-1">
          Hi <span className="text-black font-semibold underline">{ userDetails.firstName }!</span>
          <Link>
            <span onClick={handleLogout} className="hidden md:block">
              Logout
            </span>
          </Link>
        </div>
      ) : (

        <div className="flex gap-1">
          Hi!
          <Link to="/login" className="underline text-blue-500">
            Sign in
          </Link>{" "}
          <span className="hidden md:block">or </span>
          <Link
            to="/register"
            className="hidden md:block underline text-blue-500"
          >
            register
          </Link>
        </div>
      ) }
    </>
  );
}

export default User;
