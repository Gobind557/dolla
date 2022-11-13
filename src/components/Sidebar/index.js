import {
  SidebarContainer,
  SidebarWrapper,
  SideBtnWrap,
  SidebarMenu,
  SidebarRoute,
  SidebarLink,
  Icon,
  CloseIcon,
} from "./SidebarElement";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="Discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="Services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="SignUp" onClick={toggle}>
            SignUp
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/ignIn">SignIn</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
