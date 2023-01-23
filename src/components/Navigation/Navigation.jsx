import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { Nav, List, ListItem, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <Nav>
      <List>
      {token && (
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>
         )}
        {token && (
          <ListItem>
            <NavigationLink to="contacts">Contacts</NavigationLink>
          </ListItem>
        )}
      </List>
    </Nav>
  );
};
