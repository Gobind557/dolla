import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLinks,
  NavBtn,
} from "./navElemnt";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [ScrolNav, SetScrolNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      SetScrolNav(true);
    } else {
      SetScrolNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav ScrolNav={ScrolNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Discover"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="Services"
                smooth={true}
                duration={500}
                spy={true}
                exact={true}
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='SignUp'>SignUp</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLinks to="/Signin">sign In</NavBtnLinks>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
