import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUserName = localStorage.getItem('userName');
    const storedUserId = localStorage.getItem('userId');

    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      if (storedUserName) setUserName(storedUserName);
      if (storedUserId) setUserId(storedUserId);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userName', userName);
      localStorage.setItem('userId', userId);
    } else {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
    }
  }, [isLoggedIn, userName, userId]);

  return {
    isLoggedIn,
    setIsLoggedIn,
    userName,
    setUserName,
    userId,
    setUserId,
  };
};
