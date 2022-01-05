import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated
    ? <Navigate to="/" />
    : children
};
