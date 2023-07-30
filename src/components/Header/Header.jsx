import { HeaderStyle, Nav, NavLinkStyle } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyle>
      <Nav>
        <NavLinkStyle to="/">Home</NavLinkStyle>
        <NavLinkStyle to="/movies">Movies</NavLinkStyle>
      </Nav>
    </HeaderStyle>
  );
};

export default Header;