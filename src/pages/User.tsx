import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
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

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
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
            onClick={handleLogout}
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
    </main>
  );
};

export default User;
