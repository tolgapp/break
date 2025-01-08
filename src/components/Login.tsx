import BackButton from "./BackButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { handleSubmit, inputClass, toggleButtonColor } from "../data/helper";
import { useState } from "react";

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

  return (
    <div
      className={`flex flex-col w-full items-center justify-center h-screen ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      <h2 className="text-white text-4xl mb-10">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={inputClass}
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={user.email}
          onChange={handleLogin}
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={user.password}
          onChange={handleLogin}
        />
        <button
          className={`bg-slate-50 py-4 rounded-lg text-4xl ${toggleButtonColor(
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
