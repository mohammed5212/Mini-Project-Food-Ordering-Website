

import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = ({ searchText, setSearchText, onCategoryChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('auth');
    navigate('/');
  };

  // Hide header on login page
  if (location.pathname === '/') return null;

  return (
    <header 
    className="container-fluid bg-light py-2 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-2 text-center text-md-start mb-2 mb-md-0">
          <h4 className="m-0">🍽️ Food Order</h4>
        </div>

        <div className="col-md-4 mb-2 mb-md-0">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search Products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && (
              <button
                className="btn btn-outline-secondary ms-1"
                onClick={() => setSearchText('')}
              >
                ❌
              </button>
            )}
          </div>
        </div>

        <div className="col-md-3 mb-2 mb-md-0">
          <select
            className="form-select"
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Main Course">Main Course</option>
            <option value="Snacks">Snacks</option>
            <option value="Dessert">Dessert</option>
            <option value="Street Food">Street Food</option>
          </select>
        </div>

        <div className="col-md-3 text-center text-md-end">
          <Link to="/cart" className="btn btn-outline-primary me-2">
            🛒 Cart
          </Link>
          {isLoggedIn && (
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;