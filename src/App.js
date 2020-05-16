
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AdminLayout from './layouts/Admin.js';
import AuthLayout from './layouts/Auth.js';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import { ToastContainer } from 'react-toastify';
export default function App({ store }) {
    return (
        /* Provide Redux store */
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer />
                <Switch>
                    <Route path="/admin" render={props => <PrivateRoute {...props} component={AdminLayout} />} />
                    <Route path="/auth" render={props => <AuthLayout {...props} />} />
                    <Redirect from="/" to="/admin/index" />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}
