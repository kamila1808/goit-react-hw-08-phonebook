import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  margin-top: 25px;
  margin-left: 20px;
`;

export const List = styled.ul`
  display: flex;
  font-size: 18px;
`;

export const ListItem = styled.li`
  margin-right: 20px;
`;

export const NavigationLink = styled(NavLink)`
  padding: 10px;
  border-radius: 10px;
  color: grey;
  border: 1px solid #dcdcdc;

  &:hover,
  &:focus {
    box-shadow: 5px 5px rgba(0, 0, 255, 0.2), -1em 0 0.4em olive;
  }
`;
