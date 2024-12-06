import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
  <a href="#get-the-app" className="get-the-app">Get the App</a>
  <div className="right">
    <a href="#investor-relations" className="investor-relations">Investor Relations</a>
    <a href="#add-restaurant" className="add-restaurant">Add restaurant</a>
    <a href="#login" className="login">Log in</a>
    <a href="#signup" className="signup">Sign up</a>
  </div>
</nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the best food & drinks in Indore</h3>
        <div className="input">
          <select name="" id="">
            <option value="Chennai">Indore</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Kolkata">Kolkata</option>
          </select>
          |
          <input
            type="text"
            placeholder="Search for restaurant, cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;