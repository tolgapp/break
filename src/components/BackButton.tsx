import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonProps } from '../data/types';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const BackButton: React.FC<ButtonProps> = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {toggle} = useSelector((state: RootState) => state.toggle)
    const { isLoggedIn } = useSelector((state: RootState) => state.auth);


  if (pathname === '/profile') {
    return (
      <img
        onClick={() => navigate(-1)}
        src={
          isLoggedIn && toggle
            ? '/icons/back.png'
            : !isLoggedIn
              ? '/icons/back.png'
              : '/icons/backdark.png'
        }
        className={`${
          isLoggedIn && toggle ? 'border-white' : !isLoggedIn ? 'border-white' : 'border-slate-900'
        } border cursor-pointer fixed left-8 top-6  p-2 rounded-xl w-16`}
      />
    );
  }

  if (pathname === '/login' || pathname === '/signup') {
    return (
      <img
        onClick={() => navigate('/profile')}
        src={toggle ? '/icons/back.png' : '/icons/backdark.png'}
        className={`${
          toggle ? 'border-white' : 'border-slate-900'
        } border cursor-pointer fixed left-8 top-6  p-2 rounded-xl w-16`}
      />
    );
  }

  return (
    <img
      onClick={() => navigate(-1)}
      src={toggle ? '/icons/back.png' : '/icons/backdark.png'}
      className={`${
        toggle ? 'border-white' : 'border-slate-900'
      } border cursor-pointer fixed left-8 top-6  p-2 rounded-xl w-16`}
    />
  );
};
export default BackButton;
