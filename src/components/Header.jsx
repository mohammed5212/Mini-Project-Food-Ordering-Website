import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = ({ searchText, setSearchText, onCategoryChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.length;

  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const userType = useSelector((state) => state.auth.userType); // 👈 Get user role

  const handleLoginClick = () => {
    navigate("/login"); // 🔁 Redirect to login page
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("auth");
    navigate("/", { replace: true }); 
  };

  // Hide header on login page
  if (location.pathname === "/") return null;

  return (
    <header className="container-fluid bg-light py-2 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-2 text-center text-md-start mb-2 mb-md-0">
          <h4 className="m-0">🍽️ homely-Food</h4>
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
                onClick={() => setSearchText("")}
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

        <div className="col-md-3 d-flex justify-content-evenly align-items-center  gap-2">
          <div className="position-relative me-2">
            <Link to="/cart" className="btn btn-outline-primary">
              🛒 Cart
            </Link>
            {cartCount > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.7rem" }}
              >
                {cartCount}
              </span>
            )}
          </div>
          {/* Show Welcome Message only if logged in */}
          {isLoggedIn && (
            <span className="me-2">
              Welcome,{" "}
              <strong>{userType === "admin" ? "Admin " : "User"}</strong>
            </span>
          )}

          {/*  Show Login button only if NOT logged in */}
          {!isLoggedIn && (
            <button
              className="btn btn-outline-primary me-2"
              onClick={handleLoginClick}
            >
              🔐 Login
            </button>
          )}

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
