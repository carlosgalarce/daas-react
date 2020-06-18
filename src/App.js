
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/Admin.js';
import AuthLayout from './layouts/Auth.js';
import Classic from './layouts/Classic';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import { ToastContainer } from 'react-toastify';
import { CLIENT_ID } from './store/services/config.js';
import { Auth0Provider } from './views/AuthPages/react-auth0-spa.js';
export default function App({ store }) {

    // const onRedirectCallback = appState => {
    //     console.log("appState",appState)
    //     history.push(
    //         appState && appState.targetUrl
    //             ? appState.targetUrl
    //             : window.location.pathname
    //     );
    // };
    return (
        <Auth0Provider
            domain={'aclaro.auth0.com'}
            client_id={CLIENT_ID}
            redirect_uri={`${window.location.origin}/auth/login`}
        // onRedirectCallback={onRedirectCallback}
        >
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer />
                    <Switch>
                        <Route path="/admin" render={props => <PrivateRoute {...props} component={AdminLayout} />} />
                        <Route path="/auth" render={props => <AuthLayout {...props} />} />
                        <Route path="/classic" render={props => <Classic {...props} />} />
                        <Redirect from="/" to="/admin/index" />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </Auth0Provider>
    );
}
