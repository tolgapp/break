import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { toggleTextColor } from "../data/helper";

type UserProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

const User: React.FC<UserProps> = ({
  toggle,
  setToggle,
  getClassNames,
  getLogoSrc,
}) => {
  const textColor = toggle ? "text-gray-800" : "text-white";
  const buttonBg = toggle ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-200";

  return (
    <main
      className={`flex flex-col items-center justify-center h-screen p-6 gap-10 ${getClassNames(
        toggle
      )}`}
    >
      {/* Logo Section */}
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />

      {/* Back Button */}
      <BackButton toggle={toggle} />

      {/* Header */}
      <h1 className={`text-5xl font-bold text-center pb-6 ${textColor}`}>
        Welcome Back!
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          to="/signup"
          className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${!textColor}`}
        >
          Signup
        </Link>
        <Link
          to="/login"
          className={`flex items-center justify-center w-48 h-24 rounded-lg text-2xl font-semibold transition-all duration-300 ${buttonBg} ${!textColor}`}
        >
          Login
        </Link>
      </div>

      {/* Navbar */}
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </main>
  );
};

export default User;
