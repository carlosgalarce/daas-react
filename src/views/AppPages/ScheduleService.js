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
import { useDispatch, useSelector } from 'react-redux';
import { ScheduleServiceActions } from '../../store/ducks/schedule-service-duck/actions';
import moment from 'moment';
import ReactDatePicker from 'react-datepicker';

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
  const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
  const isProgressBookAppointment = useSelector(store => store?.schedule?.isProgressBookAppointment);
  const isProgressSpecs = useSelector(store => store?.vehicle?.isProgressSpecs);
  const isProgressPrice = useSelector(store => store?.vehicle?.isProgressPrice);
  const isProgressRecomndServices = useSelector(store => store?.schedule?.isProgressRecomndServices);
  const vehicles = useSelector(store => store?.settings?.customerInfo?.Vehicles);
  const userProfile = useSelector(store => store?.auth?.userProfile);
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
      let selectedDate = moment(formValues.selectedDate).format('YYYY-MM-DD');
      dispatch(ScheduleServiceActions.getAvailabilities(formValues.providerId, formValues.serviceId, selectedDate));
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
    let selectedDate = moment(formValues.selectedDate).format('YYYY-MM-DD');
    let start = selectedDate + ' ' + moment(formValues.availableSlot, 'HH:mm').format('HH:mm:ss');
    let end = selectedDate + ' ' + moment(formValues.availableSlot, 'HH:mm').add(1, 'hour').format('HH:mm:ss');
    let body = {
      book: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
      start,
      end,
      notes: formValues.notes,
      customerId: userProfile?.id,
      providerId: formValues.providerId,
      serviceId: formValues.serviceId,
      googleCalendarId: null
    };
    dispatch(ScheduleServiceActions.bookAppointment(body));
  }, [formValues, notValid, userProfile, dispatch]);


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
                  isProgressServices || isProgressProviders || isProgressInfo || isProgressPrice || isProgressSpecs || isProgressRecomndServices
                    ?
                    <div className="d-flex justify-content-center align-items-center" >
                      <div className="spinner-grow" ></div>
                    </div>
                    :
                    <>
                      <div className='vehicle-image d-flex justify-content-start ' >
                        {vehicles && <img alt={'img'} src={vehicles?.Photo} />}
                      </div>
                      <Row className="" >
                        <Col md={'12'} >
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
                              <Label className="form-control-label" for="start-date">Select Appointment Date </Label>
                              <FormGroup>

                                <ReactDatePicker
                                  selected={formValues.selectedDate}
                                  wrapperClassName="w-100"
                                  onChange={date => setFormValues({ ...formValues, selectedDate: date })}
                                  minDate={new Date()}
                                  placeholderText="Select date"
                                  className="form-control form-control-alternative"
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
                        {/* <Col md={'6'} className='vehicle-info-container shadow-lg rounded' >
                          <h1 className="text-center" >Vehicle Info</h1>
                          <h2 className="text-primary" >Specs</h2>
                          <div className="d-flex  justify-content-between" >
                            <h4  > ABS </h4>
                            <h4  > {vehicleSpecs?.anti_brake_system} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > City Mileage </h4>
                            <h4  > {vehicleSpecs?.city_mileage} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Drive Type </h4>
                            <h4  > {vehicleSpecs?.drive_type} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Engine </h4>
                            <h4  > {vehicleSpecs?.engine} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Fuel Type </h4>
                            <h4  > {vehicleSpecs?.fuel_type} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Highway Mileage </h4>
                            <h4  > {vehicleSpecs?.highway_mileage} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Made In </h4>
                            <h4  > {vehicleSpecs?.made_in} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Make </h4>
                            <h4  > {vehicleSpecs?.make} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Model </h4>
                            <h4  > {vehicleSpecs?.model} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Steering Type </h4>
                            <h4  > {vehicleSpecs?.steering_type} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Style </h4>
                            <h4  > {vehicleSpecs?.style} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Transmission </h4>
                            <h4  > {vehicleSpecs?.transmission} </h4>
                          </div>
                          <h2 className="text-primary" >Price</h2>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Price (above) </h4>
                            <h4  > {vehiclePrice?.prices?.above} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Price (average) </h4>
                            <h4  > {vehiclePrice?.prices?.average} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Price (below) </h4>
                            <h4  > {vehiclePrice?.prices?.below} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Period (from) </h4>
                            <h4  > {vehiclePrice?.period[0]} </h4>
                          </div>
                          <div className="d-flex  justify-content-between" >
                            <h4  > Period (to) </h4>
                            <h4  > {vehiclePrice?.period[1]} </h4>
                          </div>
                        </Col> */}
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
