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
// react component that copies the given text inside your clipboard
import { /* CopyToClipboard */ } from 'react-copy-to-clipboard';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  // Col,
  // UncontrolledTooltip
} from 'reactstrap';
// core components
import Header from '../../components/Headers/Header';

class ScheduleService extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className=" mt--7" fluid>
          {/* Table */}
          <Row>
            <div className=" col">
              <Card className=" shadow">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Schedule a Service</h3>
                </CardHeader>
                <CardBody>
                  <Row className="justify-content-center" >
                    <Col md={'8'} >
                      <Row>
                        <Col md={'6'} >
                          <FormGroup>
                            <Label className="form-control-label" for="provider">Select Provider</Label>
                            <Input className="form-control-alternative" type="select" id="provider">
                              <option>Select Provider</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={'6'} >
                          <FormGroup>
                            <Label className="form-control-label" for="service">Select Service Recommended</Label>
                            <Input className="form-control-alternative" type="select" id="service">
                              <option>Select Service</option>
                            </Input>
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={'6'} >
                          <FormGroup>

                            <Label className="form-control-label" for="start-date">Select Start Date </Label>
                            <Input className="form-control-alternative" type="date" id="start-date" />
                          </FormGroup>
                        </Col>
                        <Col md={'6'} >

                          <FormGroup>

                            <Label className="form-control-label" for="end-date">Select End Date</Label>
                            <Input className="form-control-alternative" type="date" id="end-date" />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={'6'} >
                          <FormGroup>
                            <Label className="form-control-label" for="available-slots">Available Slots</Label>
                            <Input className="form-control-alternative" type="select" id="available-slots">
                              <option>Select Time Slot</option>
                            </Input>
                          </FormGroup>
                        </Col>
                        <Col md={'6'} >
                          <FormGroup>

                            <Label className="form-control-label" for="notes">Notes</Label>
                            <Input className="form-control-alternative" type={'textarea'} id="notes" />
                          </FormGroup>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}

export default ScheduleService;
