import { useState } from "react";
import BackButton from "./BackButton";
import Logo from "./Logo";
import { BACKEND_URL, inputClass, toggleButtonColor } from "../data/helper";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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

    axios
      .post(`${BACKEND_URL}/signup`, value)
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          setValue({
            name: "",
            surname: "",
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        console.error("Signup failed:", error);
      });

    setTimeout(() => {
      navigate("/login");
    }, 300);
  };

  return (
    <div
      className={`flex flex-col w-full items-center justify-center h-screen ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      <h2 className={`text-4xl mb-10 w-[80%] text-center font-semibold`}>
        Sign up and get BEANS for every order ⭐️
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={`${inputClass}  ${toggleButtonColor(toggle)}`}
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleData}
          placeholder="Name"
        />
        <input
          className={`${inputClass}  ${toggleButtonColor(toggle)}`}
          type="text"
          name="surname"
          id="surname"
          value={value.surname}
          onChange={handleData}
          placeholder="Surname"
        />
        <input
          className={`${inputClass}  ${toggleButtonColor(toggle)}`}
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={handleData}
          placeholder="Email"
        />
        <input
          className={`${inputClass}  ${toggleButtonColor(toggle)}`}
          type="password"
          name="password"
          id="password"
          value={value.password}
          onChange={handleData}
          placeholder="Password"
        />
        <button
          className={`py-4 rounded-lg text-4xl ${toggleButtonColor(toggle)}`}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
