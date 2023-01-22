
import { List, ListItem, NavigationLink } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <nav>
      <List>
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink to="register">Register</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink to="login">Login</NavigationLink>
        </ListItem>
      </List>
    </nav>
  );
};
