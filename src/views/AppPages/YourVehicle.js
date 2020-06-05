import React from 'react';
import { Container, Row, Col, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';

export default function YourVehicle() {
    const vehicles = useSelector(store => store?.settings?.customerInfo?.Vehicles);
    const vehicleSpecs = useSelector(store => store?.vehicle?.specs);
    const vehiclePrice = useSelector(store => store?.vehicle?.price);
    const isProgressServices = useSelector(store => store?.schedule?.isProgressServices);
    // const isProgressProviders = useSelector(store => store?.schedule?.isProgressProviders);
    const isProgressSpecs = useSelector(store => store?.vehicle?.isProgressSpecs);
    const isProgressPrice = useSelector(store => store?.vehicle?.isProgressPrice);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className=" mt--7" fluid>

                <Row>
                    <div className="col">
                        <Card className=" shadow">
                            <CardHeader className=" bg-transparent">
                                <h3 className=" mb-0">Your Vehicle</h3>
                            </CardHeader>
                            <CardBody>
                                {
                                    isProgressServices || isProgressInfo || isProgressPrice || isProgressSpecs
                                        ?
                                        <div className="d-flex justify-content-center align-items-center" >
                                            <div className="spinner-grow" ></div>
                                        </div>
                                        :
                                        <>

                                            <div className='vehicle-image d-flex justify-content-center w-100' >
                                                {vehicles && <img alt={'img'} src={vehicles?.Photo} />}
                                            </div>
                                            <Row className="justify-content-center" >
                                                <Col md={'8'} className='vehicle-info-container shadow-lg rounded' >
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
                                                        {/* {vehiclePrice?.prices?.above} </h4> */}
                                                        <h4  ><NumberFormat value={vehiclePrice?.prices?.above} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4 >
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4  > Price (average) </h4>
                                                        {/* <h4  > {vehiclePrice?.prices?.average} </h4> */}
                                                        <h4  ><NumberFormat value={vehiclePrice?.prices?.above} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4  > Price (below) </h4>
                                                        {/* <h4  > {vehiclePrice?.prices?.below} </h4> */}
                                                        <h4  ><NumberFormat value={vehiclePrice?.prices?.below} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    {/* <div className="d-flex  justify-content-between" >
                                                        <h4  > Period (from) </h4>
                                                        <h4  > {vehiclePrice?.period[0]} </h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4  > Period (to) </h4>
                                                        <h4  > {vehiclePrice?.period[1]} </h4>
                                                    </div> */}
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