import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../reducer/authSlice';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      dispatch(login('admin'));
      localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userType: 'admin' }));
      navigate('/admin');
    } else if (username === 'user' && password === 'user123') {
      dispatch(login('user'));
      localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, userType: 'user' }));
      navigate('/user');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="mb-4">🔐 Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
