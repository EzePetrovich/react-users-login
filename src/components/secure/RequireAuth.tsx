import { Navigate } from 'react-router-dom';

interface RequireAuthProps {
  isLoged: boolean;
  children: JSX.Element;
}

export const RequireAuth = ({ children, isLoged }: RequireAuthProps) => {
  if (!isLoged) return <Navigate to={'/login'} />;
  return children;
};
