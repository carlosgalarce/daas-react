import React from 'react';// reactstrap components
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
import Marker from '../../assets/img/icons/marker.svg';
import Mail from '../../assets/img/icons/mail.svg';
import Phone from '../../assets/img/icons/phone.svg';

export default function ContactUs() {
    return (
        <>
            <Row className="justify-content-center">

                <Col md="12">
                    <Card className="bg-secondary shadow border-0">
                        {/* <CardHeader> Contact Us </CardHeader> */}

                        <CardBody className="px-lg-5 py-lg-5">
                            <h1 className="text-center mb-4" >Your Journey to enhanced
Auto financing starts now!</h1>

                            <Row>
                                <Col md={6} >
                                    <div className="d-flex flex-column justify-content-around h-100 mt-3" >
                                        <div className="d-flex align-items-center" >
                                            <img src={Mail} alt={'img'} className="icon-sm" />
                                            <span className="ml-2" >  info@aclaro.ai </span>
                                        </div>
                                        <div className="d-flex align-items-center" >
                                            <img src={Phone} alt={'img'} className="icon-sm" />
                                            <span className="ml-2" >   +1-833-222-5276</span>
                                        </div>
                                        <div className="d-flex  align-items-center" >
                                            <i class="fab fa-twitter mr-3" aria-hidden="true"></i>
                                            <i class="fab fa-instagram mr-3" aria-hidden="true"></i>
                                            <i class="fab fa-linkedin mr-3" aria-hidden="true"></i>
                                            <i class="fab fa-facebook mr-3" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={6} >
                                    <div className="text-center text-muted mb-4">
                                        <small>Enter your details</small>
                                    </div>
                                    <Form  >
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <Input
                                                    placeholder="Full Name"
                                                    type="text"
                                                // value={formValues.firstName}
                                                // onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })}
                                                />
                                            </InputGroup>
                                            {/* {(notValid.error && notValid.type === 'firstName') && <label className="text-danger" > {notValid.message} </label>} */}
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative mb-3">
                                                <Input
                                                    placeholder="Email"
                                                    type="text"
                                                // value={formValues.lastName}
                                                // onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })}
                                                />
                                            </InputGroup>
                                            {/* {(notValid.error && notValid.type === 'lastName') && <label className="text-danger" > {notValid.message} </label>} */}
                                        </FormGroup>

                                        <Row className="my-4">
                                            <Col xs="12">
                                                <div className="custom-control custom-control-alternative custom-checkbox">
                                                    <input
                                                        className="custom-control-input"
                                                        id="customCheckRegister"
                                                        type="checkbox"
                                                    />

                                                </div>
                                            </Col>
                                        </Row>
                                        <div className="text-center">
                                            {
                                                // isProgress ?
                                                //     <div className="spinner-border" ></div>
                                                //     : 
                                                <Button className="mt-4" color="primary" type="submit">
                                                    Get Started
                                </Button>
                                            }
                                        </div>
                                    </Form>
                                </Col>

                            </Row>

                        </CardBody>



                    </Card>
                </Col>
            </Row>

            <Row className="mt-5" >
                <Col md="4" >
                    <Card className="bg-secondary shadow border-0">

                        <CardBody className="px-lg-5 py-lg-5">

                            <h3 className="d-flex justify-content-center align-items-center" >
                                <img src={Marker} alt={'img'} className="icon" />
                                <span>Aclaró AI Headquarters </span>
                            </h3>
                            <h4 className="text-muted" >78 SW 7 Street Suite, 500 Miami FL 33130</h4>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" >
                    <Card className=" card-location bg-secondary shadow border-0">
                        <CardBody className="px-lg-5 py-lg-5 ">
                            <h3 className="d-flex justify-content-center align-items-center" >
                                <img src={Marker} alt={'img'} className="icon" />
                                <span> Corporate Location New York </span>
                            </h3>
                            <h4 className="text-muted" >240 Kent Ave, Brooklyn NY 11201</h4>
                        </CardBody>
                    </Card>
                </Col>
                <Col md="4" >
                    <Card className="bg-secondary shadow border-0">

                        <CardBody className="px-lg-5 py-lg-5">
                            <h3 className="d-flex justify-content-center align-items-center" >
                                <img src={Marker} alt={'img'} className="icon" />
                                <span> Corporate Location California </span>
                            </h3>
                            <h4 className="text-muted" >75 E W Santa Clara St, San Jose, CA 95113</h4>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
}
