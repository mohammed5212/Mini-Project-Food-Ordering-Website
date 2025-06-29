// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../redux/authSlice';
// import { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { useDispatch } from "react-redux"

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (username === 'admin' && password === 'admin123') {
//       dispatch(login('admin'));
//       localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userType: 'admin' }));
//       navigate('/admin');
//     } else if (username === 'user' && password === 'user123') {
//       dispatch(login('user'));
//       localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userType: 'user' }));
//       navigate('/products');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className="container mt-5 py-10px bg-light min-vh-100 align-items-center" style={{ maxWidth: '400px', maxHeight :'auto' }}>
//       <h2 className="mb-4">🔐 Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3 d-flex  align-items-center justify-content-center">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">Login</button>
        
// <p className='d-flex justify-content-center align-items-center' style={{height:"30vh"}}>
//   You can login as  User   or   Admin
// </p>
//       </form>
//     </div>
//   );
// };

// export default Login;



import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice'; // Ensure path is correct

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === '1234') {
      dispatch(login({ username, role: 'admin' }));
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" />
      <input name="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;