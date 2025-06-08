import React from "react";
import"./Header.css";


const Header =({searchText, setSearchText, onCategoryChange}) =>{
    return(
        <header className="header">
            <h2 className="logo">Food Order</h2>

            <div className="searchBar">
                <input type="text" placeholder="Search Products..." value={searchText}
                onChange={(e) => setSearchText(e.target.value)} />
                {searchText && (<button className="clearBtn" onclick ={()=>searchText('')}>❌</button>)}

            </div>
            <select className="dropdown" onChange={(e) => onCatogeryChange(e.target.ariaValueNow)}>
                <option value="All"> All</option>
                 <option value="Main Course">Main Course</option>
                  <option value="Snacks">Snacks</option>
                   <option value="Dessert">Dessert</option>

            </select>
        </header>
    )
}
export default Header;