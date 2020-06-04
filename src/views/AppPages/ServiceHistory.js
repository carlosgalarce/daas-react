import React, { useEffect } from 'react';
import { Container, Row, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import { ServiceHistoryActions } from '../../store/ducks/service-history-duck';


export default function ServiceHistory() {

    const dispatch = useDispatch();
    // const serviceHistory = useSelector(store => store?.serviceHistory?.history)
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    useEffect(() => {
        if (Customer)
            dispatch(ServiceHistoryActions.getServiceHistory());
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
                                <h3 className=" mb-0">Service History</h3>
                            </CardHeader>
                            <CardBody>

                            </CardBody>
                        </Card>
                    </div>


                </Row>
            </Container>
        </>
    );
}