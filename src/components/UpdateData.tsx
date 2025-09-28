import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BACKEND_URL,
  getClassNames,
  inputClass,
  toggleButtonColor,
} from '../data/helper';
import Logo from './Logo';
import BackButton from './BackButton';
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

const UpdateData = () => {
  const { userId } = useSelector((state: RootState) => state.auth);
  const toggle = useSelector((state: RootState) => state.toggle.toggle);
  const [value, setValue] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/users/${userId}`);
        const { name, surname, email } = response.data;
        setValue((prev) => ({ ...prev, name, surname, email }));
      } catch (error) {
        console.error('Fehler beim Laden der Benutzerdaten:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${BACKEND_URL}/users/${userId}`, {
        name: value.name,
        surname: value.surname,
        email: value.email,
        password: value.password,
      });
      alert('Profil erfolgreich aktualisiert!');
    } catch (error) {
      console.error('Fehler beim Aktualisieren der Benutzerdaten:', error);
    }
  };

  return (
    <div
      className={`flex flex-col min-h-screen w-full items-center justify-center ${getClassNames(
        toggle
      )}`}
    >
      <Logo />
      <BackButton />
      <h2 className={`text-5xl text-left mb-12 ${getClassNames(toggle)}`}>
        Update Profile
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-[90%] gap-4">
        <input
          className={`${inputClass} ${toggleButtonColor(toggle)}`}
          type="text"
          name="name"
          id="name"
          value={value.name}
          onChange={handleChange}
          placeholder="Name"
          autoComplete="name"
        />
        <input
          className={`${inputClass} ${toggleButtonColor(toggle)}`}
          type="text"
          name="surname"
          id="surname"
          value={value.surname}
          onChange={handleChange}
          placeholder="Surname"
          autoComplete="surname"
        />
        <input
          className={`${inputClass} ${toggleButtonColor(toggle)}`}
          type="email"
          name="email"
          id="email"
          value={value.email}
          onChange={handleChange}
          placeholder="Email"
          autoComplete="email"
        />
        <input
          className={`${inputClass} ${toggleButtonColor(toggle)}`}
          type="password"
          name="password"
          id="password"
          value={value.password}
          onChange={handleChange}
          placeholder="Password"
          autoComplete="password"
        />
        <button
          className={`py-4 rounded-lg text-4xl ${toggleButtonColor(toggle)}`}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
