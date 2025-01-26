import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice.js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/constants.js";
import { logoButton, toggleGptSearchView } from "../utils/gptSearchSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(import.meta.env.VITE_OPENAI_KEY);
  };

  const handleLogoClick = () => {
    dispatch(logoButton());
  };
  return (
    <>
      <div className=" absolute  w-[100%]  py-2 bg-gradient-to-b from-black z-50">
        <div className="flex flex-col md:flex-row justify-between">
          <img
            className="w-52 mx-auto md:ml-36 cursor-pointer"
            onClick={handleLogoClick}
            alt="logo"
            src={Logo}
          />
          {user && (
            <div className="flex justify-center mt-2 align-middle ">
              {showGpt && (
                <select
                  onChange={handleLanguageChange}
                  className="bg-slate-800 text-white m-2 my-[22px] px-[1px]  rounded-lg"
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              )}
              <button
                onClick={handleGptSearch}
                className="text-white  px-4 my-3 rounded-md mx-0 font-semibold "
              >
                {showGpt ? (
                  <svg
                    className="relative -top-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="35"
                    height="35"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#d4d0ce"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(10.66667,10.66667)">
                        <path d="M12,2.09961l-11,9.90039h3v9h6v-7h4v7h6v-9h3z"></path>
                      </g>
                    </g>
                  </svg>
                ) : (
                  <svg
                    className="relative -top-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0,0,256,256"
                  >
                    <g
                      fill="#d4d0ce"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                    >
                      <g transform="scale(5.12,5.12)">
                        <path d="M21,3c-9.39844,0 -17,7.60156 -17,17c0,9.39844 7.60156,17 17,17c3.35547,0 6.46094,-0.98437 9.09375,-2.65625l12.28125,12.28125l4.25,-4.25l-12.125,-12.09375c2.17969,-2.85937 3.5,-6.40234 3.5,-10.28125c0,-9.39844 -7.60156,-17 -17,-17zM21,7c7.19922,0 13,5.80078 13,13c0,7.19922 -5.80078,13 -13,13c-7.19922,0 -13,-5.80078 -13,-13c0,-7.19922 5.80078,-13 13,-13z"></path>
                      </g>
                    </g>
                  </svg>
                )}
              </button>
              <div className="flex justify-center flex-shrink-0 pt-5">
                <div className="text-center">
                  <Link to="/user/watchlist">
                    <img className="w-8 h-8" src={user.photoURL} />
                  </Link>
                </div>
              </div>
              <button
                onClick={handleSignOut}
                className="text-white font-bold mb-7 mt-2 mx-4 md:mt-4 cursor-pointer whitespace-nowrap"
              >
                (Sign Out)
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
