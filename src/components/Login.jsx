import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { ProfilePic } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const handleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmitButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName.current.value,
            photoURL: ProfilePic,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <>
      <div className="absolute mt-40 md:mt-20 mx-auto right-0 left-0 md:w-[460px] z-10 bg-opacity-90 bg-black rounded-lg">
        <form className="pt-12 pb-12" onClick={(e) => e.preventDefault()}>
          <h1 className="text-3xl text-white font-bold  px-11 ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <div className="p-4 mx-7">
            {!isSignInForm && (
              <input
                ref={displayName}
                type="text"
                placeholder="Full Name"
                className="p-4 my-2 w-full bg-opacity-60 bg-gray-700 rounded-md  border border-white  text-white"
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
              className="p-4 my-2 w-full bg-opacity-60 bg-gray-700 rounded-md border border-white text-white"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-4 my-2 w-full bg-opacity-60 bg-gray-700 rounded-md  border border-white  text-white"
            />
            <button
              onClick={handleSubmitButton}
              className="bg-red-700 w-full p-2 mt-2 text-white font-semibold rounded-md"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="text-red-600 font-semibold my-2">{errorMessage}</p>
            <p className="text-white text-center my-4">Forgot password?</p>
            {isSignInForm && (
              <>
                <p className="text-gray-300 text-center my-4">OR</p>
                <button className="bg-gray-700 bg-opacity-40 w-full p-2 text-white font-semibold rounded-md">
                  Use a sign-in code
                </button>
                <div className=" mt-3">
                  <input type="checkbox" />
                  <span className="text-white px-1">Remember me</span>
                </div>{" "}
              </>
            )}
            <p className="my-3 cursor-pointer" onClick={handleSignInForm}>
              {isSignInForm ? (
                <>
                  <span className="text-gray-300 ">New to Netflix? </span>
                  <span className="font-semibold text-white">Sign up now.</span>
                </>
              ) : (
                <>
                  <span className="text-gray-300 ">
                    Already have an account?{" "}
                  </span>
                  <span className="font-semibold text-white">Sign In now.</span>
                </>
              )}
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
