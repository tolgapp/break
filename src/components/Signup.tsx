import { useState } from "react";
import BackButton from "./BackButton";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { handleSubmit, inputClass } from "../data/helper";


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



  return (
    <div className="flex flex-col w-full items-center justify-center h-screen">
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle}/>
      <h2 className="text-white text-4xl mb-10 w-[70%] text-center">Sign up and get points for every order ⭐️</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={inputClass}
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleData}
          placeholder="Name"
        />
        <input
          className={inputClass}
          type="text"
          name="surname"
          id="surname"
          value={value.surname}
          onChange={handleData}
          placeholder="Surname"
        />
        <input
          className={inputClass}
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={handleData}
          placeholder="Email"
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          id="password"
          value={value.password}
          onChange={handleData}
          placeholder="Password"
        />
        <button className="bg-slate-50 px-4 py-6 rounded-lg text-4xl">
          Submit
        </button>
      </form>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};

export default Signup;
