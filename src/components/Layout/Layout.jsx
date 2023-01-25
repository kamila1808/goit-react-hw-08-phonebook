import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { selectToken } from 'redux/auth/auth-selectors';

import { Header } from './Layout.styled';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <Header>
      <Navigation />
        {token ? < UserAuthMenu/> : <AuthNavigation />  }
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
