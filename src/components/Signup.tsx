import { useState } from "react";
import BackButton from "./BackButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { inputClass, toggleButtonColor } from "../data/helper";
import axios from "axios";

type SignupProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

const Signup: React.FC<SignupProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
}) => {
  const [value, setValue] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post("http://localhost:5002/api/signup", value).then((response) => {
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
      <h2 className={`text-4xl mb-10 w-[70%] text-center`}>
        Sign up and get points for every order ⭐️
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={`${inputClass} ${
            toggle ? "bg-slate-900 text-white" : "text-black"
          }`}
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleData}
          placeholder="Name"
        />
        <input
          className={`${inputClass} ${
            toggle ? "bg-slate-900 text-white" : "text-black"
          }`}
          type="text"
          name="surname"
          id="surname"
          value={value.surname}
          onChange={handleData}
          placeholder="Surname"
        />
        <input
          className={`${inputClass} ${
            toggle ? "bg-slate-900 text-white" : "text-black"
          }`}
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={handleData}
          placeholder="Email"
        />
        <input
          className={`${inputClass} ${
            toggle ? "bg-slate-900 text-white" : "text-black"
          }`}
          type="password"
          name="password"
          id="password"
          value={value.password}
          onChange={handleData}
          placeholder="Password"
        />
        <button
          className={`${
            toggle ? "bg-slate-900 text-white" : "bg-slate-100"
          } py-4 rounded-lg text-4xl ${toggleButtonColor(toggle)}`}
        >
          Signup
        </button>
      </form>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Signup;
