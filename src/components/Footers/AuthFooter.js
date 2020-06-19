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
/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

class Login extends React.Component {
  render() {
    const { history } = this.props;
    console.log(history)
    return (
      <>
        <footer className="py-5">
          <Container>
            <Row className="align-items-center justify-content-xl-between">
              <Col xl="6">
                <div className="copyright text-center text-xl-left ">
                  © 2018{" "}
                  <Link
                    to={'/auth/login'}
                  >
                    Aclaro.
              </Link>
                </div>
              </Col>
              <Col xl="6">
                <Nav className="nav-footer justify-content-center justify-content-xl-end">
                  {/* <NavItem>
                    <NavLink
                      href="https://www.creative-tim.com?ref=adr-auth-footer"
                      target="_blank"
                    >
                      Creative Tim
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <Link className="nav-link" to='/classic/about-us'>

                      About Us

                    </Link>

                  </NavItem>

                  <NavItem>
                    <Link className="nav-link" to='/classic/contact-us'>

                      Contact Us

                    </Link>

                  </NavItem>
                  <NavItem>
                    <Link className="nav-link" to='/classic/terms-condition'>

                      Terms & Condition

                    </Link>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default withRouter(Login);


