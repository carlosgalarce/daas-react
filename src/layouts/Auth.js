/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// reactstrap components
import { Container, Row, Col } from 'reactstrap';

// core components
import AuthNavbar from '../components/Navbars/AuthNavbar';
import AuthFooter from '../components/Footers/AuthFooter';

// import routes from '../routes';
import Login from '../views/AuthPages/Login';
import Register from '../views/AuthPages/Register';
import { AuthStorage } from '../store/ducks/auth-duck/auth-storage';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../store/ducks/auth-duck';
import Logout from '../views/AuthPages/Logout';
import { useAuth0 } from '../views/AuthPages/react-auth0-spa';

function Auth({ history }) {
  const { isAuthenticated, } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.classList.add('bg-default');
    return () => {
      document.body.classList.remove('bg-default');
    };
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.replace('/admin/index');
    }
    else if (!isAuthenticated) {
      AuthStorage.clearStorage();
      dispatch(AuthActions.logout());
    }
  }, [isAuthenticated, dispatch, history]);


  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">

                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              <Route
                path={'/auth/login'}
                component={Login}
              />
              <Route
                path={'/auth/register'}
                component={Register}
              />
              <Route
                path={'/auth/logout'}
                component={Logout}
              />
              <Redirect from="*" to="/auth/register" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}


export default Auth;
