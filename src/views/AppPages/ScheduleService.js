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
  Button,
  // Col,
  // UncontrolledTooltip
} from 'reactstrap';
// core components
import Header from '../../components/Headers/Header';
import MyCarousel from '../../components/Carousel/MyCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { ScheduleServiceActions } from '../../store/ducks/schedule-service-duck/actions';
// import moment from 'moment';

function ScheduleService() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ScheduleServiceActions.getServices());
    dispatch(ScheduleServiceActions.getProviders());
  }, [dispatch]);

  const services = useSelector(store => store?.schedule?.services);
  const providers = useSelector(store => store?.schedule?.providers);
  const availabilties = useSelector(store => store?.schedule?.availabilties);
  const isProgressAvailabilities = useSelector(store => store?.schedule?.isProgressAvailabilities);
  const isProgressServices = useSelector(store => store?.schedule?.isProgressServices);
  const isProgressProviders = useSelector(store => store?.schedule?.isProgressProviders);
  const vehicles = useSelector(store => store?.settings?.customerInfo?.Vehicles);
  const [formValues, setFormValues] = useState({
    providerId: '',
    serviceId: '',
    selectedDate: '',
    availableSlot: '',
    notes: ''
  });
  const [filteredProviders, setFilteredProviders] = useState([]);
  useEffect(() => {
    if (formValues.serviceId && formValues.providerId && formValues.selectedDate) {
      // let todayDate = moment(new Date()).format('YYYY-MM-DD');
      dispatch(ScheduleServiceActions.getAvailabilities(formValues.providerId, formValues.serviceId, formValues.selectedDate));
    }

  }, [formValues.serviceId, formValues.providerId, formValues.selectedDate, dispatch]);
  useEffect(() => {
    if (formValues.serviceId) {
      let filteredProviders = providers.filter((v) => {
        return v.services.indexOf(formValues.serviceId) > -1;
      });
      setFilteredProviders(filteredProviders);
    }
  }, [formValues.serviceId, providers]);
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
                {
                  isProgressServices || isProgressProviders
                    ?
                    <div className="d-flex justify-content-center align-items-center" >
                      <div className="spinner-grow" ></div>
                    </div>
                    :
                    <>
                      <Row className="mb-5"  >
                        <Col md={'12'} >
                          <MyCarousel vehicles={vehicles || []} />
                        </Col>
                      </Row>
                      <Row className="justify-content-center" >
                        <Col md={'8'} >
                          <Row>
                            <Col md={'6'} >
                              <FormGroup>
                                <Label className="form-control-label" for="service">Select Service Recommended</Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  id="service"
                                  value={formValues.serviceId}
                                  onChange={(e) => setFormValues({ ...formValues, serviceId: e.target.value })}
                                >
                                  <option value={''} >Select Service</option>
                                  {
                                    services.map((v, i) => {
                                      return (<option key={i} value={v.id} >{v.name}</option>);
                                    })
                                  }
                                </Input>
                              </FormGroup>
                            </Col>
                            <Col md={'6'} >
                              <FormGroup>
                                <Label className="form-control-label" for="provider">Select Provider</Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  id="provider"
                                  disabled={!formValues.serviceId}
                                  value={formValues.providerId}
                                  onChange={(e) => setFormValues({ ...formValues, providerId: e.target.value })}
                                >
                                  <option value={''} >Select Provider</option>
                                  {
                                    filteredProviders.map((v, i) => {
                                      return (<option key={i} value={v.id} >{v.firstName}{' '}{v.lastName}</option>);
                                    })
                                  }
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={'6'} >
                              <FormGroup>

                                <Label className="form-control-label" for="start-date">Select Start Date </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="date"
                                  id="start-date"
                                  value={formValues.selectedDate}
                                  onChange={(e) => setFormValues({ ...formValues, selectedDate: e.target.value })}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={'6'} >

                              <FormGroup>
                                <Label className="form-control-label" for="available-slots">
                                  <span className="mr-3" >Available Slots</span>
                                  {isProgressAvailabilities && <div className="spinner-border spinner-border-sm" ></div>}
                                </Label>
                                <Input
                                  className="form-control-alternative"
                                  type="select"
                                  id="available-slots"
                                  value={formValues.availableSlot}
                                  disabled={isProgressAvailabilities}
                                  onChange={(e) => setFormValues({ ...formValues, availableSlot: e.target.value })}
                                >
                                  <option value={''} >Select Time Slot</option>
                                  {
                                    availabilties.map((v, i) => {
                                      return (<option key={i} value={v} >{v}</option>);
                                    })
                                  }
                                </Input>
                              </FormGroup>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={'12'} >
                              <FormGroup>

                                <Label className="form-control-label" for="notes">Notes</Label>
                                <Input className="form-control-alternative" type={'textarea'} id="notes" />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={'12'} >
                              <Button color="primary" > Book Appointment</Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </>
                }
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}


export default ScheduleService;
