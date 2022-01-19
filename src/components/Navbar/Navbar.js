import React, { useEffect, useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu} className="navlogo">
            {/* <NavIcon src={logo} alt="catech_logo" /> */}
            UMLToUI
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? "X" : "<-"}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Inicio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about" onClick={closeMobileMenu}>
                Acerca de
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/help" onClick={closeMobileMenu}>
                Ayuda
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
