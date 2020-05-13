import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { AuthStorage } from '../../store/ducks/auth-duck/auth-storage';
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        (AuthStorage.getUser())
            ? <Component {...props} />
            : <Redirect to={'/auth/login'} />
    )} />
);
PrivateRoute.propTypes = {
    component: PropTypes.object
};
export default PrivateRoute;
