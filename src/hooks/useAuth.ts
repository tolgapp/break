// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setAuth } from '../store/reducers/authSlice'

// export const useAuth = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
//     const storedUserName = localStorage.getItem('userName');
//     const storedUserId = localStorage.getItem('userId');

//     if (storedIsLoggedIn && storedUserName && storedUserId) {
//       dispatch(
//         setAuth({
//           isLoggedIn: true,
//           userName: storedUserName,
//           userId: storedUserId,
//         })
//       );
//     }
//   }, [dispatch]);

// };
