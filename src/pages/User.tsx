import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import UserAction from "../components/UserAction";
import UserPage from "../components/Userpage";

type UserProps = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
  getClassNames: (value: boolean) => string;
  getLogoSrc: (value: boolean) => string;
  setIsLoggedIn: (value: boolean) => void;
  isLoggedIn: boolean;
  userName: string;
};

const User: React.FC<UserProps> = ({
  toggle,
  setToggle,
  getClassNames,
  getLogoSrc,
  setIsLoggedIn,
  isLoggedIn,
  userName,
}) => {
  const textColor = toggle ? "text-gray-800" : "text-white";

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-10 ${getClassNames(
        toggle
      )}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} />
      <BackButton toggle={toggle} />
      {isLoggedIn ? (
        <>
          <div className="gap-6 flex px-6 upper-container justify-around items-center w-full">
            <h2 className="text-5xl">Welcome back, {userName}</h2>
            <img
            onClick={logout}
              className="w-14 hover:grayscale"
              src="/icons/logout.png"
              alt="shutdown icon in red"
            />
          </div>
          <UserPage />
        </>
      ) : (
        <>
          <h1 className={`text-5xl font-bold text-center pb-6 ${textColor}`}>
            Welcome Back!
          </h1>
          <UserAction toggle={toggle} />
        </>
      )}
      <Navbar
        toggle={toggle}
        getClassNames={getClassNames}
        userName={userName}
        isLoggedIn={isLoggedIn}
      />
    </main>
  );
};

export default User;
