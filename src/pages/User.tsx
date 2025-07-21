import QRCode from 'react-qr-code';
import BackButton from '../components/BackButton';
import Logo from '../components/Logo';
import UserAction from '../components/UserAction';
import UserPage from '../components/Userpage';
import { UserProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getClassNames } from '../data/helper';

const User: React.FC<UserProps> = ({ setIsLoggedIn, isLoggedIn, userName }) => {
  const toggle = useSelector((state: RootState) => state.toggle.toggle);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-screen gap-3 ${getClassNames(
        toggle
      )} ${isLoggedIn ? '' : 'bg-[url(/bg-image01.webp)] bg-cover'}`}
    >
      <Logo isLoggedIn={isLoggedIn} />
      <BackButton isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <>
          <QRCode
            size={256}
            style={{
              position: 'absolute',
              right: 20,
              top: 18,
              height: 'auto',
              maxWidth: '10%',
              width: '10%',
            }}
            value={'TEST'}
            viewBox={`0 0 256 256`}
          />
          <div className="gap-6 flex px-6 upper-container mb-10 justify-around items-center w-full">
            <h2 className={`text-5xl font-semibold`}>Welcome back, {userName}</h2>
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
          <h2 className={`text-5xl font-bold text-center pb-6 text-white`}>Welcome Back!</h2>
          <UserAction />
        </>
      )}
    </main>
  );
};

export default User;
