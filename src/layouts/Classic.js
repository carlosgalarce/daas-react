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
import { Route, Switch, } from 'react-router-dom';
// reactstrap components
import { Container, Row, } from 'reactstrap';

// core components
import AuthFooter from '../components/Footers/AuthFooter';

// import routes from '../routes';
import TermsNConditon from '../views/ClassicPages/TermsNConditon';

function Classic() {
  useEffect(() => {
    document.body.classList.add('bg-default');
    return () => {
      document.body.classList.remove('bg-default');
    };
  }, []);




  return (
    <>
      <div className="main-content">
        {/* <AuthNavbar /> */}
        <div className="header bg-gradient-info py-7 py-lg-8">
          {/* <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">

                  </p>
                </Col>
              </Row>
            </div>
          </Container> */}
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
                path={'/classic/terms-condition'}
                component={TermsNConditon}
              />


            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}


export default Classic;
