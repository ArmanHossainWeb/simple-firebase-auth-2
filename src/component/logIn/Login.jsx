import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase_init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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
  
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div className="">
      <h1 className="font-bold">Login</h1>
      <br />
      {user ? (
        <button onClick={handleSignOut} className="btn btn-error">
          Sign out{" "}
        </button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn} className="btn btn-success mr-5">
            login with google
          </button>
          <button className="btn btn-info" onClick={handleGithubSignIn}>
            sign in with github
          </button>
        </>
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
