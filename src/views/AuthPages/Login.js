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
import React, { useEffect, useState } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  // FormGroup,
  Form,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Col,
  Alert
} from 'reactstrap';
import { useAuth0 } from './react-auth0-spa';

function Login({ history }) {
  const { /* isAuthenticated, */ loginWithRedirect, /* logout, */ loading, } = useAuth0();
  const [error, setError] = useState('');
  useEffect(() => {
    let search = history?.location?.search;
    if (search) {
      search = search.split('error_description=')[1];

      setError(decodeURIComponent(search));
    }
  }, [history]);
  if (loading) {
    return (<div className="d-flex justify-content-center align-items-center" >
      <div className="spinner-grow" ></div>
    </div>);
  }


  else
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted mb-4">
                {error &&
                  <Alert color="danger"  >
                    {error}
                  </Alert>
                }
                <small>On signin you will be redirected!</small>
              </div>
              <Form role="form">
                {/* <FormGroup className="mb-3">
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-email-83" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="email" autoComplete="new-email" />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Password" type="password" autoComplete="new-password" />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div> */}
                <div className="text-center">
                  <Button onClick={() => loginWithRedirect({})} className="my-4" color="primary" type="button">
                    Sign in
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>

        </Col>
      </>
    );
}

export default Login;
