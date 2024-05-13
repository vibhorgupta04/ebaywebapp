import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";

function User() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      {!localStorage.getItem("token") ? (
        <div className="flex gap-1">
          Hi!{" "}
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
      ) : (
        <div className="flex gap-1">
          Hi!
          <Link>
            <span onClick={handleLogout} className="hidden md:block">
              Logout
            </span>
          </Link>
        </div>
      )}
    </>
  );
}

export default User;
