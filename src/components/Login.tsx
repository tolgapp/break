import BackButton from "./BackButton";
import Logo from "./Logo";
import { BACKEND_URL, inputClass, toggleButtonColor } from "../data/helper";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type LoginProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  setIsLoggedIn: (value: boolean) => void;
  setUserName: (value: string) => void;
  setUserId: (value: string) => void;
};

const Login: React.FC<LoginProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
  setIsLoggedIn,
  setUserName,
  setUserId,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState("");

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post(`${BACKEND_URL}/login`, user)
      .then((response) => {
        setUserName(response.data.userName);
        if (response.status === 200) {
          setIsLoggedIn(true);
          setUserId(response.data.userId);
        }
      })
      .catch((error) => {
        console.error("Login failed:", error);
        setIsError(error.response.data)
      });
  };

  return (
    <div
      className={`flex flex-col w-full items-center justify-center h-screen ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      <h2 className="text-4xl font-semibold text-center text-balance mb-10 w-[90%]">
        Login and get BEANS for every order
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={` ${inputClass}  ${toggleButtonColor(toggle)}`}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={handleLogin}
        />
        <input
          className={` ${inputClass}  ${toggleButtonColor(toggle)}`}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={handleLogin}
        />
        <button
          className={`py-4 rounded-lg text-4xl ${toggleButtonColor(toggle)}`}
        >
          Login
        </button>
      </form>
      {isError ? <p className="text-red-500 px-8 rounded-lg text-3xl mt-8 font-bold">{isError}</p>
       : <p className="mt-8 text-3xl">New @ break? <Link to={"/signup"} className="mt-8 text-3xl cursor-pointer underline">Sign Up!</Link></p> }
    </div>
  );
};

export default Login;
