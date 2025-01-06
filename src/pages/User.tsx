import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

type UserProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
};

const User: React.FC<UserProps> = ({
  toggle,
  setToggle,
  getLogoSrc,
  getClassNames,
}) => {
  return (
    <div className="text-white flex justify-center items-center h-screen flex-col gap-5">
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle}/>
      <h1 className="text-4xl text-center pb-10">USER</h1>
      <Link to={"/signup"}>
        <h2 className="text-4xl">Signup</h2>
      </Link>
      <Link to={"/login"}>
        <h2 className="text-4xl">Login</h2>
      </Link>
      <Navbar toggle={toggle} getClassNames={getClassNames} />
    </div>
  );
};
export default User;
