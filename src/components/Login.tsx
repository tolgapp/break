import BackButton from "./BackButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { inputClass, toggleButtonColor } from "../data/helper";
import { useState } from "react";
import axios from "axios";

type LoginProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

const Login: React.FC<LoginProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
}) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post("http://localhost:5002/api/login", user).then((response) => {
      console.log(response);
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
      <h2 className="text-4xl font-semibold text-center mb-10 w-[90%]">Login and get points for each 1€</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={` ${inputClass}  ${toggle ? "bg-slate-900" : ""}`}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={handleLogin}
        />
        <input
          className={` ${inputClass}  ${toggle ? "bg-slate-900" : ""}`}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={handleLogin}
        />
        <button
          className={`${toggle ? "bg-slate-900 text-white" : "bg-slate-100"} py-4 rounded-lg text-4xl ${toggleButtonColor(
            toggle
          )}`}
        >
          Login
        </button>
      </form>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Login;
