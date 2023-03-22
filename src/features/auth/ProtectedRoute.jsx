import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ type, children }) => {
  const user = useSelector(state => state.auth.user); 
  switch (type) {
    case "auth":
      return user ? (
        children
      ) : (
        <Navigate to="/login" replace />
      );
    case "guest":
      return !user ? (
        children
      ) : (
        <Navigate to="/home" replace />
      );
    default:
      return null;
  }
};

export default ProtectedRoute;