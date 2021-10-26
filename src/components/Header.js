import React from "react";
import "./Header.css";
import { Search } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase/config";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt=""
          className="header-logo"
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header-searchInput" />
        <Search className="header-searchIcon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"} className="header-login">
          <div className="header-option" onClick={handleAuthentication}>
            <span className="header-optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header-optionLineTwo">
              Sign {!user ? "in" : "out"}
            </span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionLineOne">Returns</span>
          <span className="header-optionLineTwo">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionLineOne">Your</span>
          <span className="header-optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header-optionBasket">
          <ShoppingBasketIcon />
          <span className="header-optionLineTwo header-basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
