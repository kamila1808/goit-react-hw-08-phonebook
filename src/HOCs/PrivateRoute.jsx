import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { selectIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

// export const PrivateRoute = ({ children }) => {
//   const token = useSelector(selectToken);

//   return token ? children : <Navigate to="/login" />;
// };



export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsFetchingCurrentUser);
  const shouldRedirect = !token && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};