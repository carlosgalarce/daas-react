import React from 'react';// reactstrap components
import {
    Card,
    CardBody,
    Row,
    Col,
} from 'reactstrap';
import Bond from '../../assets/img/icons/bond.svg';
import Idea from '../../assets/img/icons/idea.svg';
import Focus from '../../assets/img/icons/focus.svg';


export default function AboutUs() {
    return (
        <>
            <Row className="justify-content-center">

                <Col md="12">
                    <Card className="bg-secondary shadow border-0">
                        {/* <CardHeader> Contact Us </CardHeader> */}

                        <CardBody className="px-lg-5 py-lg-5">
                            <Row>
                                <Col md={4} className="d-flex flex-column align-items-center" >
                                    <img alt={'img'} className="icon" src={Bond} />
                                    <h2 className="text-center" >Why Aclaró AI</h2>
                                </Col>
                                <Col md={4} className="d-flex flex-column align-items-center" >
                                    <img alt={'img'} className="icon" src={Idea} />
                                    <h2 className="text-center" >Shifting The Paradigm</h2>
                                </Col>
                                <Col md={4} className="d-flex flex-column align-items-center" >
                                    <img alt={'img'} className="icon" src={Focus} />
                                    <h2 className="text-center" >Our Success</h2>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col md={4}>
                                    <h3 className="" >Before Aclaró AI</h3>
                                    <p>The auto financing market was full of barriers and inefficiencies. Borrowers found it extremely difficult to obtain financing to purchase a vehicle, even when they had good credit. On the other side, many smaller lenders found it difficult to mitigate their risk and extend the lifetime value of their current borrowers.</p>
                                </Col>
                                <Col md={4}>
                                    <h3 className="" >We shifted the paradigm</h3>
                                    <p>As an auto lender, you’re always on the look out for ways to drive the best consumer experience in an increasingly competitive market. When it comes to closing a deal and getting a car off the lot, every second counts. So, when your competitors are approving loans in minutes, you are sipping your coffee and watching Aclaró make approvals for you, in real-time.</p>
                                </Col>
                                <Col md={4}>
                                    <h3 className="" >And we succeeded.</h3>
                                    <p>We help auto lenders deliver personalized experiences to borrowers. At Aclaró, we empower both big and small lenders with cutting-edge technology so that they can increase both their top lines and reduce their expenses.  While we started with our game-changing risk management product, Aclaró TrueView, we have developed fully-integrated tools that can simultaneously support your revenue generation and risk management goals. From gaining valuable insights about a particular borrower to making it seamless for a borrower to populate and submit a loan application, we at Aclaró are focused on your success.</p>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>


                    <Card className="bg-secondary shadow border-0 mt-5 ">
                        {/* <CardHeader> Contact Us </CardHeader> */}

                        <CardBody className="px-lg-5 py-lg-5">
                            <h1 className="text-center" >The Data you Need, when you Need it</h1>
                            <Row className="mt-4">
                                <Col md={12}>
                                    <h3 className="" >The power of Data inyour hands</h3>
                                    <p>You will say yes faster, and to those who more likely to pay back in full! Aclaró AI is a top-of-the-line financing platform that lets your risk teams quickly deploy sophisticated risk strategies—so you can make smarter decisions. Our support of advanced data science tools, such as machine learning, helps you get deeper insights from data so you can say yes more, with confidence.</p>
                                </Col>
                                <Col md={12}>
                                    <h3 className="" >Close deals in seconds,even nanoseconds!</h3>
                                    <p>Use sophisticated automation to replace time-consuming manual processes for instantaneous credit decisions tailored to each customer. Tell the Aclaró Platform how you want to handle decisioning, from straight-through processing of credit-worthy applications to flagging complex requests requiring more careful analysis. Aclaró can simplify and streamline the process from end to end.</p>
                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                    <div className="mt-5" >
                        <h1 className="text-center" >What Drives Us</h1>
                        <Row className="mt-2">
                            <Col md={6}>
                                <Card className="bg-secondary shadow border-0 mt-5 ">
                                    <CardBody>
                                        <h3 className="" >Creativity</h3>
                                        <p>At Aclaró AI, we aren’t afraid to think outside of the box, whether that is updating our cutting-edge software or helping clients with particular issues.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="bg-secondary shadow border-0 mt-5 ">
                                    <CardBody>
                                        <h3 className="" >Stellar Customer Service</h3>
                                        <p>Stellar customer service is at the heart of what we do. We treat our clients like family. By working with us, your satisfaction is guaranteed.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="bg-secondary shadow border-0 mt-5 ">
                                    <CardBody>
                                        <h3 className="" >Impact</h3>
                                        <p>Our value proposition is clear. By becoming an Aclaró AI client, you will see an impact throughout your business’ income statement.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card className="bg-secondary shadow border-0 mt-5 ">
                                    <CardBody>
                                        <h3 className="" >Passion</h3>
                                        <p>We truly love what we do. We bring that passion to our work, going the extra mile to ensure that we exceed your expectations.</p>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5" >
                        <h1 className="text-center mb-5" >Our Leadership Team</h1>
                        <Row className="mt-4">
                            <Col md={3}>
                                <Card className="card-profile shadow">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={'https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640/https://aclaro.ai/wp-content/uploads/2020/01/ceo.jpg'}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <CardBody className="pt-0 pt-md-4 ">
                                        <div className="text-center mt-5 pt-5">
                                            <h2>
                                                Carlos Galarce
                                            </h2>
                                            <h3 className="text-blue" >
                                                Chief Executive Officer
                                            </h3>
                                            <p>
                                                Highly accomplished Senior IT and Operations Executive and a recognized leader in business growth.
                                            </p>
                                            <div className="d-flex justify-content-end  align-items-center mt-5" >
                                                <i class="fab fa-twitter mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-instagram mr-3" aria-hidden="true"></i> */}
                                                <i class="fab fa-linkedin mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-facebook mr-3" aria-hidden="true"></i> */}
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card-profile shadow">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={'https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640/https://aclaro.ai/wp-content/uploads/2020/01/cmo.jpg'}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <CardBody className="pt-0 pt-md-4">
                                        <div className="text-center mt-5 pt-5">
                                            <h2>
                                                Melissa Tello
                                            </h2>
                                            <h3 className="text-blue" >
                                                Chief Marketing Officer
                                            </h3>
                                            <p>
                                                Expert in branding and integrated marketing strategies that drive sophisticated results for the company.
                                            </p>
                                            <div className="d-flex justify-content-end  align-items-center" >
                                                <i class="fab fa-twitter mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-instagram mr-3" aria-hidden="true"></i> */}
                                                <i class="fab fa-linkedin mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-facebook mr-3" aria-hidden="true"></i> */}
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card-profile shadow">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={'https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640/https://aclaro.ai/wp-content/uploads/2020/01/CPO.jpg'}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <CardBody className="pt-0 pt-md-4">
                                        <div className="text-center mt-5 pt-5">
                                            <h2>
                                                Doron Mor
                                            </h2>
                                            <h3 className="text-blue" >
                                                Chief Product Officer
                                            </h3>
                                            <p>
                                                Creator and guardian of world-class customer experiences that help Aclaró AI stay on top of competition.
                                            </p>
                                            <div className="d-flex justify-content-end  align-items-center" >
                                                <i class="fab fa-twitter mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-instagram mr-3" aria-hidden="true"></i> */}
                                                <i class="fab fa-linkedin mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-facebook mr-3" aria-hidden="true"></i> */}
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="card-profile shadow">
                                    <Row className="justify-content-center">
                                        <Col className="order-lg-2" lg="3">
                                            <div className="card-profile-image">
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="rounded-circle"
                                                        src={'https://cdn.shortpixel.ai/client/to_webp,q_lossless,ret_img,w_640/https://aclaro.ai/wp-content/uploads/2020/01/Fotouhi.jpg'}
                                                    />
                                                </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <CardBody className="pt-0 pt-md-4">
                                        <div className="text-center mt-5 pt-5">
                                            <h2>
                                                Farshad Fatouhi

                                            </h2>
                                            <h3 className="text-blue" >
                                                Chief Technical Officer
                                            </h3>
                                            <p>
                                                Dean of Wayne State University’s College of Engineering and seasoned expert in computer engineering.
                                            </p>
                                            <div className="d-flex justify-content-end  align-items-center" >
                                                <i class="fab fa-twitter mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-instagram mr-3" aria-hidden="true"></i> */}
                                                <i class="fab fa-linkedin mr-3" aria-hidden="true"></i>
                                                {/* <i class="fab fa-facebook mr-3" aria-hidden="true"></i> */}
                                            </div>

                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </>
    );
}
