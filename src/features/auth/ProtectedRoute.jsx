import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthenticationTypes = {
  AUTH: 'auth',
  GUEST: 'guest',
  ADMIN: 'admin'
};

const ProtectedRoute = ({ authenticationType, children }) => {
  const user = useSelector(state => state.auth.user); 
  switch (authenticationType) {
    case AuthenticationTypes.AUTH:
      return user ? (
        children
      ) : (
        <Navigate to="/login" replace />
      );
    case AuthenticationTypes.GUEST:
      return !user ? (
        children
      ) : (
        <Navigate to="/home" replace />
      );
    case AuthenticationTypes.ADMIN:
      return user && user.role === "admin" ? (
        children
      ) : (
        <Navigate to="/unauthorized" replace />
      );
    default:
      return null;
  }
};

export default ProtectedRoute;