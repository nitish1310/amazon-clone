import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div id="nav-top">
      <div className="header">
        {/* <div className="header__menu1"> */}
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        {/* <input class="header__menuBtn" type="checkbox" id="menu-btn" />
          <label class="header__menuIcon" for="header__menuBtn">
            <span class="header__navicon"></span>
          </label> */}
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
          {/* logo */}
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              {/*  ? User not loaded due t async so add ? */}
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
        {/* </div> */}
      </div>
      <div className="headerSecondary">
        <div className="header__nav">
          <div className="header__option">
            <span className="header_optionLineOne">Delivery to test123</span>
            <span className="header_optionLineTwo">Orlando 32835</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Prime Videos</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Best Sellers</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">
              Browsing History
            </span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Fresh</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Whole Foods</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">
              Customer Servicey
            </span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">
              Test123's Amazon.com
            </span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Today's Deals</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">Buy Again</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLineTwo">New Releases</span>
          </div>
          <div className="header__option">
            <span className="headerSecondary_optionLast">
              Prime Day is October 13-14
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
