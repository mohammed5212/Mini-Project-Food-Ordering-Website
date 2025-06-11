import { Link } from 'react-router-dom';
import"./Header.css";


const Header =({searchText, setSearchText, onCategoryChange}) =>{
    return(
        <header className="header">
            <h2 className="logo">Food Order</h2>

            <div className="searchBar">
                <input type="text" placeholder="Search Products..." value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
                {searchText && (<button className="clearBtn" onClick ={()=>setSearchText('')}>❌</button>)}

            </div>
            <select className="dropdown" onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="All"> All</option>
                 <option value="Main Course">Main Course</option>
                  <option value="Snacks">Snacks</option>
                   <option value="Dessert">Dessert</option>
                    <option value="Street Food">Street Food</option>

            </select>
             <Link to="/cart">🛒 Cart</Link>
        </header>
    )
}
export default Header;