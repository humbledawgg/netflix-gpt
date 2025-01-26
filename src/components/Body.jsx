import { Background } from "../utils/constants.js";
import Header from "./Header.jsx";
import Login from "./Login.jsx";

const Body = () => {
  return (
    <div>
      <Header />

      <div className="">
        <img
          className="fixed h-[100%] w-[100%] object-cover"
          alt="background-image"
          src={Background}
        />
      </div>
      <Login />
    </div>
  );
};

export default Body;
