import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  width: 100%;
  z-index: 1100;
  display: flex;
  align-items: center;
  min-height: 64px;
  padding: 12px 24px;
  color: #fff;
  background-color: #C71585;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 28px;
  margin-left: 10px;
`;

export const NavLinkStyle = styled(NavLink)`
  color: ${p => p.theme.colors.white};
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;

  :hover,
  :focus {
    padding: 1px;
    border-radius: 2px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;