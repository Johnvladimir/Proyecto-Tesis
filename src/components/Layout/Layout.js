import React from "react";
import PropTypes from "prop-types";

import NavBar from "../Navbar/Navbar";

const Layout = ({ children, footerColor }) => {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
