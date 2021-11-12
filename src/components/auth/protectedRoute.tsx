import React from 'react';
import { Navigate, Route, RouteProps, } from 'react-router-dom';
import { Squares } from "react-activity";
import { useFirebaseUserContext } from '../../firebase/context/firebaseUserContextProvider';

interface ProtectedRouteProps extends RouteProps {

}

/**
 * Deprecated after react-router-dom@6.0.2
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ ...rest}) => {

  const user = useFirebaseUserContext();

  if (user === undefined) {
    return <Squares />
  }

  if (user === null) return <Navigate to='' />;

  return <Route {...rest} />

}

export default ProtectedRoute;
