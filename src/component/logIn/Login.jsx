import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase_init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      Login
      <br />
      {user ? (
        <button onClick={handleSignOut} className="btn btn-error">
          Sign out{" "}
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-success">
          login with google
        </button>
      )}
      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
