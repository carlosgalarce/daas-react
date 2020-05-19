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
import React, { useState, useCallback, useEffect } from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Row,
  Col,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AuthActions } from '../../store/ducks/auth-duck';

export default function Register() {
  const dispatch = useDispatch();
  const isError = useSelector(store => store?.auth?.isError);
  const registerUserSucc = useSelector(store => store?.auth?.registerUserSucc);
  const isProgress = useSelector(store => store?.auth?.isProgress);
  const [notValid, setNotValid] = useState({ error: false, type: '', message: '' });
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    zipCode: '',
    notes: '',
    address: '',
    city: '',
    password: ''

  });
  useEffect(() => {
    dispatch(AuthActions.getAuthToken());
  }, [dispatch]);

  useEffect(() => {
    if (registerUserSucc) {
      dispatch(AuthActions.clearRegisterUserSucc());
      let body = {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        phone: formValues.phoneNo,
        zip: formValues.zipCode,
        address: formValues.address,
        city: formValues.city,
        notes: formValues.notes
      };
      dispatch(AuthActions.registerCustomer(body));

    }
  }, [registerUserSucc, dispatch, formValues]);
  const onSignUpClick = useCallback((e) => {
    e.preventDefault();
    if (isError) {
      dispatch(AuthActions.clearError());
    }
    if (notValid.error) {
      setNotValid({ error: false, type: '', message: '' });
    }
    if (!formValues.firstName) {
      setNotValid({ error: true, type: 'firstName', message: 'Please provide first name' });
      return;
    }
    if (!formValues.lastName) {
      setNotValid({ error: true, type: 'lastName', message: 'Please provide last name' });
      return;
    }

    if (!formValues.email) {
      setNotValid({ error: true, type: 'email', message: 'Please provide email' });
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formValues.email)) {
      setNotValid({ error: true, type: 'email', message: 'Invalid email' });
      return;
    }
    if (!formValues.password) {
      setNotValid({ error: true, type: 'password', message: 'Please provide password' });
      return;
    }
    if (formValues.password.length < 8) {
      setNotValid({ error: true, type: 'password', message: 'Password must contain 8 characters' });
      return;
    }
    if (!formValues.phoneNo) {
      setNotValid({ error: true, type: 'phoneNo', message: 'Please provide phone number' });
      return;
    }
    if (!formValues.address) {
      setNotValid({ error: true, type: 'address', message: 'Please provide address' });
      return;
    }
    if (!formValues.city) {
      setNotValid({ error: true, type: 'city', message: 'Please provide city' });
      return;
    }
    if (!formValues.zipCode) {
      setNotValid({ error: true, type: 'zipCode', message: 'Please provide zip code' });
      return;
    }
    if (!formValues.notes) {
      setNotValid({ error: true, type: 'notes', message: 'Please provide notes' });
      return;
    }
    let body = {
      connection: 'VehicleManager',
      email: formValues.email,
      password: formValues.password,
      user_metadata: { phone_number: formValues.phoneNo },
      email_verified: false,
      app_metadata: {}
    };
    dispatch(AuthActions.registerUser(body));
    // let body = {
    //   firstName: formValues.firstName,
    //   lastName: formValues.lastName,
    //   email: formValues.email,
    //   phone: formValues.phoneNo,
    //   zip: formValues.zipCode,
    //   address: formValues.address,
    //   city: formValues.city,
    //   notes: formValues.notes
    // };
    // dispatch(AuthActions.registerCustomer(body));


  }, [formValues, notValid, dispatch, isError]);
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Enter your details</small>
            </div>
            <Form onSubmit={onSignUpClick} >
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="First Name"
                    type="text"
                    value={formValues.firstName}
                    onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'firstName') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Last Name"
                    type="text"
                    value={formValues.lastName}
                    onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'lastName') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Email"
                    type="email"
                    value={formValues.email}
                    onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'email') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Password"
                    type="password"
                    value={formValues.password}
                    onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'password') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Phone Number"
                    type="text"
                    value={formValues.phoneNo}
                    onChange={(e) => setFormValues({ ...formValues, phoneNo: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'phoneNo') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Address"
                    type="text"
                    value={formValues.address}
                    onChange={(e) => setFormValues({ ...formValues, address: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'address') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="City"
                    type="text"
                    value={formValues.city}
                    onChange={(e) => setFormValues({ ...formValues, city: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'city') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="ZipCode"
                    type="text"
                    value={formValues.zipCode}
                    onChange={(e) => setFormValues({ ...formValues, zipCode: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'zipCode') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <Input
                    placeholder="Notes"
                    type="text"
                    value={formValues.notes}
                    onChange={(e) => setFormValues({ ...formValues, notes: e.target.value })}
                  />
                </InputGroup>
                {(notValid.error && notValid.type === 'notes') && <label className="text-danger" > {notValid.message} </label>}
              </FormGroup>
              <Row className="my-4">
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    {/* <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        I agree with the{' '}
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          Privacy Policy
                          </a>
                      </span>
                    </label> */}
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                {isProgress ?
                  <div className="spinner-border" ></div>
                  : <Button className="mt-4" color="primary" type="submit">
                    Create account
                  </Button>}
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

