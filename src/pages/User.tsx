import BackButton from "../components/BackButton";
import Logo from "../components/Logo";
import UserAction from "../components/UserAction";
import UserPage from "../components/Userpage";

type UserProps = {
  toggle: boolean;
  setToggle: (value: boolean | ((prevToggle: boolean) => boolean)) => void;
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
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear()
  };

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-3 ${getClassNames(
        toggle
      )} ${isLoggedIn ? "" : "bg-[url(/bg-image01.jpg)] bg-cover"}`}
    >
      <Logo toggle={toggle} setToggle={setToggle} getLogoSrc={getLogoSrc} isLoggedIn={isLoggedIn}/>
      <BackButton toggle={toggle} isLoggedIn={isLoggedIn}/>
      {isLoggedIn ? (
        <>
          <div className="gap-6 flex px-6 upper-container mb-10 justify-around items-center w-full">
            <h2 className={`text-5xl font-semibold`}>
              Welcome back, {userName}
            </h2>
            <img
              onClick={handleLogout}
              className="w-14 cursor-pointer hover:delay-200 hover:rotate-180"
              src="/icons/logout.png"
              alt="shutdown icon in red"
            />
          </div>
          <UserPage />
        </>
      ) : (
        <>
          <h2 className={`text-5xl font-bold text-center pb-6 text-white`}>
            Welcome Back!
          </h2>
          <UserAction toggle={toggle} />
        </>
      )}
    </main>
  );
};

export default User;
