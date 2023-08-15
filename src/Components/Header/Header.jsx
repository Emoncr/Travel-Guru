import React from "react";
import logo from "../../images/Group 1330.png";
const Header = () => {
  return (
    <div className="header_container xl:container container mx-auto px-5 ">
      <div className="inner_header">
        <div className="nav_container flex items-center justify-between">
          <div className="image-container">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul className="nav_items flex items-center justify-center">
              <li className="nav_item ml-0 ">News</li>
              <li className="nav_item">Destination</li>
              <li className="nav_item">Blog</li>
              <li className="nav_item">Contact</li>
              <li className="nav_item ml-10 px-6 py-2.5  brand_btn">Login</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
