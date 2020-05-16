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
import React, { useEffect, useState, useCallback } from 'react';
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
import moment from 'moment';

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
  const isProgressBookAppointment = useSelector(store => store?.schedule?.isProgressBookAppointment);
  const vehicles = useSelector(store => store?.settings?.customerInfo?.Vehicles);
  const user = useSelector(store => store?.auth?.user);
  const appointment = useSelector(store => store?.schedule?.appointment);
  const [formValues, setFormValues] = useState({
    providerId: '',
    serviceId: '',
    selectedDate: '',
    availableSlot: '',
    notes: ''
  });
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [notValid, setNotValid] = useState({ error: false, type: '', message: '' });
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

  useEffect(() => {
    if (appointment) {
      setFormValues({
        providerId: '',
        serviceId: '',
        selectedDate: '',
        availableSlot: '',
        notes: ''
      });
      dispatch(ScheduleServiceActions.clearAppointment());
    }
  }, [appointment, dispatch]);


  const onBookClick = useCallback(() => {
    if (notValid.error) {
      setNotValid({ error: false, type: '', message: '' });
    }
    if (!formValues.serviceId) {
      setNotValid({ error: true, type: 'serviceId', message: 'Please select service' });
      return;
    }
    if (!formValues.providerId) {
      setNotValid({ error: true, type: 'providerId', message: 'Please select provider' });
      return;
    }

    if (!formValues.selectedDate) {
      setNotValid({ error: true, type: 'selectedDate', message: 'Please select date' });
      return;
    }

    if (!formValues.availableSlot) {
      setNotValid({ error: true, type: 'availableSlot', message: 'Please available slot' });
      return;
    }
    let start = formValues.selectedDate + ' ' + moment(formValues.availableSlot, 'HH:mm').format('HH:mm:ss');
    let end = formValues.selectedDate + ' ' + moment(formValues.availableSlot, 'HH:mm').add(1, 'hour').format('HH:mm:ss');
    let body = {
      book: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start,
      end,
      notes: formValues.notes,
      customerId: user?.id,
      providerId: formValues.providerId,
      serviceId: formValues.serviceId,
      googleCalendarId: null
    };
    dispatch(ScheduleServiceActions.bookAppointment(body));
  }, [formValues, notValid, user, dispatch]);



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
                                {(notValid.error && notValid.type === 'serviceId') && <label className="text-danger" > {notValid.message} </label>}

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
                                {(notValid.error && notValid.type === 'providerId') && <label className="text-danger" > {notValid.message} </label>}

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
                                  minLength={new Date()}
                                  value={formValues.selectedDate}
                                  onChange={(e) => setFormValues({ ...formValues, selectedDate: e.target.value })}
                                />
                                {(notValid.error && notValid.type === 'selectedDate') && <label className="text-danger" > {notValid.message} </label>}

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
                                {(notValid.error && notValid.type === 'availableSlot') && <label className="text-danger" > {notValid.message} </label>}

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
                              {isProgressBookAppointment
                                ?
                                <div className="spinner-border " ></div>
                                :
                                <Button color="primary" onClick={onBookClick} > Book Appointment</Button>}
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
