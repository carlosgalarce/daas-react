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
import React from 'react';

// reactstrap components
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';

export default function UserHeader() {
  const user = useSelector(store => store?.auth?.userProfile);
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '600px',
          backgroundImage:
            'url(' + require('../../assets/img/theme/cover.jpeg') + ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col md="12">
              <h1 className="display-2 text-white w-100">Hello {user?.firstName}</h1>
              <p className="text-white mt-0 mb-5">
                {/* This is your profile page. You can see the progress you've
                made with your work and manage your projects or assigned tasks */}
              </p>
              {/* <Button
                color="info"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Edit profile
                </Button> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

