import React, { useEffect } from 'react';
import { Container, Row, Col, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import NumberFormat from 'react-number-format';
import { FinanceActions } from '../../store/ducks/finance-duck/actions';

export default function Finance() {
    // const vehicles = useSelector(store => store?.settings?.customerInfo?.Vehicles);
    // const transaction = useSelector(store => store?.vehicle?.specs);
    // const vehiclePrice = useSelector(store => store?.vehicle?.price);
    // const isProgressServices = useSelector(store => store?.schedule?.isProgressServices);
    // const isProgressSpecs = useSelector(store => store?.vehicle?.isProgressSpecs);
    // const isProgressPrice = useSelector(store => store?.vehicle?.isProgressPrice);
    const dispatch = useDispatch();
    const isProgress = useSelector(store => store?.finance?.isProgress);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    const transaction = useSelector(store => store?.finance?.transaction);
    useEffect(() => {
        if (Customer)
            dispatch(FinanceActions.getTransaction());
    }, [dispatch, Customer]);
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className=" mt--7" fluid>

                <Row>
                    <div className="col">
                        <Card className=" shadow">
                            <CardHeader className=" bg-transparent">
                                <h3 className=" mb-0 text-center">Finance</h3>
                            </CardHeader>
                            <CardBody>
                                {
                                   /*  isProgressServices || */ isProgress || isProgressInfo /* || isProgressPrice || isProgressSpecs */
                                        ?
                                        <div className="d-flex justify-content-center align-items-center" >
                                            <div className="spinner-grow" ></div>
                                        </div>
                                        :
                                        <>
                                            <Row className="justify-content-center" >
                                                <Col md={'8'} className='vehicle-info-container shadow-lg rounded' >
                                                    <h1 className="text-center" >Transaction</h1>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Condition </h4>
                                                        <h4> {transaction?.CONDITION} </h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Mileage </h4>
                                                        <h4> {transaction?.MILEAGE} </h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Bankname </h4>
                                                        <h4> {transaction?.BANKNAME} </h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Apr </h4>
                                                        <h4> {transaction?.APR} </h4>
                                                    </div>

                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Cashprice </h4>
                                                        <h4><NumberFormat value={transaction?.CASHPRICE} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4 >
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Contractterm </h4>
                                                        <h4><NumberFormat value={transaction?.CONTRACTTERM} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Cashdown </h4>
                                                        <h4><NumberFormat value={transaction?.CASHDOWN} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Amount Financed </h4>
                                                        <h4><NumberFormat value={transaction?.AMOUNTFINANCED} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Finance Charge </h4>
                                                        <h4><NumberFormat value={transaction?.FINANCECHARGE} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>
                                                    <div className="d-flex  justify-content-between" >
                                                        <h4> Payment </h4>
                                                        <h4><NumberFormat value={transaction?.PAYMENT} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h4>
                                                    </div>

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