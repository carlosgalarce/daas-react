import React, { useEffect } from 'react';
import { Container, Row, CardHeader, Card, CardBody } from 'reactstrap';
import Header from '../../components/Headers/Header';
import { useSelector, useDispatch } from 'react-redux';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { VehicleActions } from '../../store/ducks/vehicle-duck/actions';
export default function RecommendForYou() {
    const { SearchBar } = Search;
    const dispatch = useDispatch();
    const recommendForYou = useSelector(store => store?.vehicle?.recommendForYou);
    const isProgressInfo = useSelector(store => store?.settings?.isProgressInfo);
    const isProgressRecommend = useSelector(store => store?.vehicle?.isProgressRecommend);
    const Customer = useSelector(store => store?.settings?.customerInfo?.Customer);
    useEffect(() => {
        if (Customer)
            dispatch(VehicleActions.getVehicleMatch());
    }, [dispatch, Customer]);
    const remote = {
        filter: false,
        pagination: false,
        sort: false,
        cellEdit: false
    };
    const columns = [
        {
            dataField: 'MAKE',
            text: 'Make',
            sort: true
        },
        {
            dataField: 'YEAR',
            text: 'Year',
            sort: true
        },
        {
            dataField: 'MODEL',
            text: 'Model',
            sort: true
        },
        {
            dataField: 'BODY',
            text: 'Body',
            sort: true
        },
        {
            dataField: 'MILEAGE',
            text: 'Mileage',
            sort: true
        },
        {
            dataField: 'TRANSMISSION',
            text: 'Transmission',
            sort: true
        },
        {
            dataField: 'MPGHWY',
            text: 'Mpghwy',
            sort: true
        },
        {
            dataField: 'MPGCITY',
            text: 'Mpgcity',
            sort: true
        },
        {
            dataField: 'CONDITION',
            text: 'Condition',
            sort: true
        },
        {
            dataField: 'PRICE',
            text: 'Price',
            sort: true
        },
        {
            dataField: 'MARKETPLACE_PRICE',
            text: 'Marketplace Price',
            sort: true
        },
        {
            dataField: 'vsMake',
            text: 'Vsmake',
            sort: true
        },
        {
            dataField: 'vsModel',
            text: 'Vs model',
            sort: true
        },
        {
            dataField: 'engine',
            text: 'Engine',
            sort: true
        },
        {
            dataField: 'vsStyle',
            text: 'Vs style',
            sort: true
        },
        {
            dataField: 'made_in',
            text: 'Made In',
            sort: true
        },






    ];
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className=" mt--7" fluid>

                <Row>
                    <div className="col">
                        <Card className=" shadow">
                            <CardHeader className=" bg-transparent">
                                <h3 className=" mb-0 text-center ">Recommended For You</h3>
                            </CardHeader>
                            <CardBody>
                                {isProgressRecommend || isProgressInfo
                                    ?
                                    <div className="d-flex justify-content-center align-items-center" >
                                        <div className="spinner-grow" ></div>
                                    </div>
                                    :
                                    <ToolkitProvider
                                        keyField={'id'}
                                        data={recommendForYou || []}
                                        columns={columns}
                                        bootstrap4
                                        search

                                    >{
                                            props => (
                                                <div>
                                                    <div className="d-flex justify-content-end w-100" >
                                                        <SearchBar className="" {...props.searchProps} />
                                                    </div>
                                                    <BootstrapTable
                                                        remote={remote}
                                                        keyField={'ActivityID'}
                                                        key={'ActivityID'}
                                                        wrapperClasses={'table-responsive'}
                                                        classes=""
                                                        headerWrapperClasses="thead-light "
                                                        bordered={false}
                                                        headerClasses=""
                                                        bodyClasses=""
                                                        {...props.baseProps}
                                                        noDataIndication={() => <div className="text-center" >{'No results found'}</div>}
                                                        pagination={paginationFactory()}
                                                    />
                                                </div>
                                            )

                                        }
                                    </ToolkitProvider>}
                            </CardBody>
                        </Card>
                    </div>


                </Row>
            </Container>
        </>
    );
}