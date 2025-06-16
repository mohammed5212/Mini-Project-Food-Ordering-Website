// import { Link } from 'react-router-dom';
// import"./Header.css";


// const Header =({searchText, setSearchText, onCategoryChange}) =>{
//     return(
//         <header className="header">
//             <h2 className="logo">Food Order</h2>

//             <div className="searchBar">
//                 <input type="text" placeholder="Search Products..." value={searchText}
//                 onChange={(e) => setSearchText(e.target.value)} />
//                 {searchText && (<button className="clearBtn" onClick ={()=>setSearchText('')}>❌</button>)}

//             </div>
//             <select className="dropdown" onChange={(e) => onCategoryChange(e.target.value)}>
//                 <option value="All"> All</option>
//                  <option value="Main Course">Main Course</option>
//                   <option value="Snacks">Snacks</option>
//                    <option value="Dessert">Dessert</option>
//                     <option value="Street Food">Street Food</option>

//             </select>
//              <Link to="/cart">🛒 Cart</Link>
//         </header>
//     )
// }
// export default Header

import { useDispatch, useSelector} from 'react-redux';
import { logout } from '../reducer/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = ({ searchText, setSearchText, onCategoryChange }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <header className="header">
      <h2 className="logo">🍽️ Food Order</h2>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText && (
          <button className="clearBtn" onClick={() => setSearchText('')}>
            ❌
          </button>
        )}
      </div>

      <select className="dropdown" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">All</option>
  {/* Header; */}
       <option value="Main Course">Main Course</option>
        <option value="Snacks">Snacks</option>
        <option value="Dessert">Dessert</option>
        <option value="Street Food">Street Food</option>
      </select>

      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link to="/cart">🛒 Cart</Link>

        {isAuthenticated && (
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;