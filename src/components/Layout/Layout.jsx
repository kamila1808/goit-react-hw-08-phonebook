import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Navigation } from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { UserAuthMenu } from 'components/UserAuthMenu/UserAuthMenu';
import { selectToken } from 'redux/auth/auth-selectors';

export const Layout = () => {
  const token = useSelector(selectToken);

  return (
    <>
      <header>
      <Navigation />
        {!token ? <AuthNavigation /> : < UserAuthMenu/>}
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
