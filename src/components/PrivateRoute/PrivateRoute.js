import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, /* Redirect */ } from 'react-router-dom';
// import { AuthStorage } from '../../store/ducks/auth-duck/auth-storage';
import { useAuth0 } from '../../views/AuthPages/react-auth0-spa';
// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         (AuthStorage.getUser())
//             ? <Component {...props} />
//             : <Redirect to={'/auth/login'} />
//     )} />
// );

const PrivateRoute = ({ component: Component, path, ...rest }) => {
    const { loading, isAuthenticated, loginWithRedirect } = useAuth0();
  
    useEffect(() => {
      if (loading || isAuthenticated) {
        return;
      }
      const fn = async () => {
        await loginWithRedirect({
          appState: {targetUrl: window.location.pathname}
        });
      };
      fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);
  
    const render = props =>
      isAuthenticated === true ? <Component {...props} /> : null;
  
    return <Route path={path} render={render} {...rest} />;
  };
PrivateRoute.propTypes = {
    component: PropTypes.object
};
export default PrivateRoute;
