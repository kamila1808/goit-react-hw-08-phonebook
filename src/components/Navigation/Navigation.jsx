import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';

import { List, ListItem, NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const token = useSelector(selectToken);

  return (
    <nav>
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
    </nav>
  );
};
